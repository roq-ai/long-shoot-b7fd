const mapping: Record<string, string> = {
  'customer-supports': 'customer_support',
  developers: 'developer',
  games: 'game',
  'game-owners': 'game_owner',
  'game-testers': 'game_tester',
  issues: 'issue',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
