import { Document } from 'mongoose';
export interface ICompany extends Document {
  readonly name: String;
  readonly website: String;
  readonly phone: String;
  readonly fax: String;
  readonly addressLine1: String;
  readonly addressLine2: String;
  readonly city: String;
  readonly state: String;
  readonly zip: String;
  readonly countryCode: String;
  readonly  email: String;
  readonly  secondaryEmail: String;
  readonly tertiaryEmail: String;
  readonly logo: String;
}
