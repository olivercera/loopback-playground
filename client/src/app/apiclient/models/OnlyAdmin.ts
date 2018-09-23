/* tslint:disable */

declare var Object: any;
export interface OnlyAdminInterface {
  "name": string;
  "id"?: number;
}

export class OnlyAdmin implements OnlyAdminInterface {
  "name": string;
  "id": number;
  constructor(data?: OnlyAdminInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `OnlyAdmin`.
   */
  public static getModelName() {
    return "OnlyAdmin";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of OnlyAdmin for dynamic purposes.
  **/
  public static factory(data: OnlyAdminInterface): OnlyAdmin{
    return new OnlyAdmin(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'OnlyAdmin',
      plural: 'OnlyAdmins',
      path: 'OnlyAdmins',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
