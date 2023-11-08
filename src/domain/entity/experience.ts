export default class ExperienceEntity {
  constructor(
    public readonly id: number,
    public readonly title: string,
    public readonly company: string,
    public readonly location: string,
    public readonly from: Date,
    public readonly to: Date | null,
    public readonly current: boolean,
    public readonly description: string
  ) {}

  public static createFromJson(json: any): ExperienceEntity {
    return new ExperienceEntity(
      json.id,
      json.title,
      json.company,
      json.location,
      json.from,
      json.to,
      json.current,
      json.description
    );
  }

  public toJson(): any {
    return {
      id: this.id,
      title: this.title,
      company: this.company,
      location: this.location,
      from: this.from,
      to: this.to,
      current: this.current,
      description: this.description,
    };
  }
}
