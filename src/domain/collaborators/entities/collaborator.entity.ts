/**
 * Domain entity representing a Collaborator.
 *
 * This layer is completely isolated from infrastructure or frameworks.
 * It defines only the core business data and behaviors.
 */
export class CollaboratorEntity {
  //  Personal data
  fullName!: string;
  cpf!: string;
  phone!: string;
  birthDate!: string;

  // 💼 Professional data
  registration!: string;
  position!: string;
  specialty!: string;
  admissionDate!: string;

  //  Access data
  corporateEmail!: string;
  password!: string;
  confirmPassword!: string;
  accessLevel!: string;

  //  Additional data
  active!: boolean;

  constructor(props: Partial<CollaboratorEntity>) {
    Object.assign(this, props);
  }
}
