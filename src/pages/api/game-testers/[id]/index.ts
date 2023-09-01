import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware, notificationHandlerMiddleware } from 'server/middlewares';
import { gameTesterValidationSchema } from 'validationSchema/game-testers';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  const allowed = await prisma.game_tester
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  if (!allowed) {
    return res.status(403).json({ message: 'Forbidden' });
  }

  switch (req.method) {
    case 'GET':
      return getGameTesterById();
    case 'PUT':
      return updateGameTesterById();
    case 'DELETE':
      return deleteGameTesterById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getGameTesterById() {
    const data = await prisma.game_tester.findFirst(convertQueryToPrismaUtil(req.query, 'game_tester'));
    return res.status(200).json(data);
  }

  async function updateGameTesterById() {
    await gameTesterValidationSchema.validate(req.body);
    const data = await prisma.game_tester.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    await notificationHandlerMiddleware(req, data.id);
    return res.status(200).json(data);
  }
  async function deleteGameTesterById() {
    await notificationHandlerMiddleware(req, req.query.id as string);
    const data = await prisma.game_tester.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
