export const Roless = ['Employee', 'Manager', 'Veterinary'];
export const RolePriority = {
  SuperAdmin: true,
  Admin: false,
};
export const AppPermissions = {
  list: {
    permissionForRoles: ['SuperAdmin', 'Admin'],
  },
  addProfile: {
    permissionForRoles: ['SuperAdmin'],
  },
  editProfile: {
    permissionForRoles: ['SuperAdmin'],
  },
};
