import * as mongoose from 'mongoose';
import { Expose, Transform } from 'class-transformer';
export class UserApi{
@Expose()
id: number;
@Expose({name: 'first-name'})
firstName: String;
@Expose({name: 'last-name'})
lastName: String;
@Expose({name:'email-address'})
email: String;
@Expose({name: 'avatar-url'})
avatar: String;
@Expose()
type: String;
@Expose({ name: 'company-id'})
companyId: String;
@Expose({name: 'created-at'})
dateCreated: String;
@Expose({name: 'last-changed-on'})
dateUpdated: String;

}

