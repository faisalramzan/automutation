import * as mongoose from 'mongoose';
import { Expose, Transform } from 'class-transformer';
export class CompanyApi{
    @Expose()
    id: number;
    @Expose()
    name: String;
    @Expose()
    website: String;
    @Expose()
    phone: String;
    @Expose()
    fax: String;
    @Expose({ name: 'address_one'})
    addressLine1: String;
    @Expose({ name: 'address_two'})
    addressLine2: String;
    @Expose()
    city: String;
    @Expose()
    state: String;
    @Expose()
    zip: String;
    @Expose({ name: 'countrycode'})
    countryCode: String;
    @Expose({ name: 'email_one'})
    email: String;
    @Expose({ name: 'email_two'})
    secondaryEmail: String;
    @Expose({ name: 'email_three'})
    tertiaryEmail: String;
    @Expose({name:'logo-URL'})
    logo: String;
    @Expose()
    eventCreator:{type: mongoose.Types.ObjectId}

}

