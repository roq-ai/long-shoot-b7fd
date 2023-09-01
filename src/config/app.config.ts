interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Level Designer'],
  customerRoles: [],
  tenantRoles: ['Game Owner', 'Level Designer', 'Game Tester', 'Customer Support'],
  tenantName: 'Developer',
  applicationName: 'Long shoot',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage Developer profile',
    'Invite Game Owners, Game Testers, and Customer Support to the application',
    'Manage game levels',
  ],
};
