export enum Roles {
  'Employee' = 1,
  'Manger' = 2,
  'VeterinaryManger' = 3,
  'SuperAdmin' = 4,
}

export enum GroupType {
  DynamicGroup = 1,
  DocumentGroup = 2,
  MedicineGroup = 3
}

export enum GroupTypeName {
  DynamicGroup = 'Dynamic Group',
  DocumentGroup = 'Document Group',
  MedicineGroup = 'Medicine Group'
}

export enum FileExt {
  'pdf' = 'pdf',
  'docx' = 'docx',
  'doc' = 'doc',
}
export enum FileExtension {
  ExtensionJPG = 'jpg',
  ExtensionJPEG = 'jpeg',
  ExtensionPNG = 'png',
  ExtensionGIF = 'gif',
}
export enum Priority {
  High = 1,
  Medium = 2,
  Low = 3,
}

export enum PriorityName {
  High = 'High',
  Medium = 'Medium',
  Low = 'Low',
}

export enum Role {
  SuperAdmin = 1,
  Admin = 0,
}

//for pass value on api set-password and resetp-password
export enum codeFor {
  ResetPassword = 1,
  SetPassword = 2,
}
export enum ClientSecret {
  ClientSecretForAdmin = 'EBPm6ybiY93ZpcsXZ/I89/y1rmlm2D/sDBF8X+nM48k30lsj',
  ClientSecretForSupplier = '6ZmFFfRSG5VpUbIk1RQKni5SaCr0Q3E6PT7ZyXEvpW3LkO+x',
  ClientSecretForCustomer = '5sxRKqn4C3bAO1QxVHdt5pxdNTft+/ykPpXxlAQQLp53WHxy',
}

export enum AppointmentSourceName {
  'Phone' = 'Phone',
  'Web' = 'Web',
  'PersonalVisit' = 'Personal Visit'
}

export enum AppointmentSource {
  Phone = 1,
  Web = 2,
  PersonalVisit = 3
}

export enum PaymentOption {
  Card = 1,
  Cash = 2,
  UPI = 3
}
export enum PaymentOptionName {
  Cash = 'Cash',
  UPI = 'UPI',
  Card = 'Card'
}

export enum UType {
  Admin = '5sxRKqn4C3bAO1QxVHdt5pxdNTft+/ykPpXxlAQQLp53WHxy',
  SuperAdmin = '6ZmFFfRSG5VpUbIk1RQKni5SaCr0Q3E6PT7ZyXEvpW3LkO+x',
  Supplier = 'M8amppLaB5LwUz6icZPjkMbOTUOsEXH5vKM3Vht3fuEpP9G4',
  Customer = '9gqtN5PySm7CDGpjTk9jCGy446EWMGAFyHeBkYUNXd7qiRI5',
}

export enum AppointmentStatus {
  Booked = 1,
  Cancelled = 2,
  Visited = 3
}

export enum AppointmentStatusName {
  Booked = 'Booked',
  Cancelled = 'Cancelled',
  Visited = 'Visited'
}

export enum UserTypes {
  SuperAdmin = 1,
  Admin = 2,
  Doctor = 3,
  Patient = 4,
  Receptionist = 5
}
export enum SupportTicketsName {
  'Open' = 'Open',
  'InProgress' = ' In Prpgress',
  'Resolved' = 'Resolved'
}
export enum SupportTicket {
  'Open' = 1,
  'InProgress' = 3,
  'Resolved' = 2
}
export enum TicketsSourceType {
  "Doctor" = 3,
  "Patient" = 4,
  "Receptionist" = 5,
}
export enum SupportTickets {
  "All" = 0,
  "Open" = 1,
  "InProgress" = 3,
  "Resolved" = 2
}

export enum apiUrl {
  'http://108.60.212.46:8092/ '
}