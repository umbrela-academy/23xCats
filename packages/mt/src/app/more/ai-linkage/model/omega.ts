
import {
  IoDevice,
  IoFo,
  IoGroup,
  IoHello,
  IoSensor,
  Org,
  PeopleGroup,
  Person,
  Project,
} from './entities';

export const Entities = {
  Project,
  Org,
  Person,
  PeopleGroup,

  IoDevice,
  IoSensor,
  IoGroup,
  IoHello,
  IoFo
} as const;

export type EntitiesType = typeof Entities;
export type NTTKey = keyof EntitiesType;

export type CoreEntities = {
  [ntt in keyof EntitiesType]: {
    uname: string;
    lname: string;
    delegate: string;
    select: string;
    data: string;
    where: string;
    include?: string;
    search?: string;
  };
};