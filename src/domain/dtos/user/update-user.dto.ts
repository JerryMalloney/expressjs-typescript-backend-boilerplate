export class UpdateUserDto {
  private constructor(
    public id: number,
    public firstName?: string,
    public lastName?: string
  ) {}

  static create(object: { [key: string]: any }): [string?, UpdateUserDto?] {
    const { id, firstname, lastName } = object;
    if (!id) return ["Missing id"];
    if (!firstname) return ["Missing email name"];
    if (!lastName) return ["Missing password name"];

    return [undefined, new UpdateUserDto(id, firstname, lastName)];
  }
}
