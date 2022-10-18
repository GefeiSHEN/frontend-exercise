export interface StateObject {
  name: string;
  abbreviation: string;
}

export interface FormOptionsObject {
  occupations: string[];
  states: StateObject[];
}

export interface FormAnswersObject {
  name: string;
  email: string;
  password: string;
  occupation: string;
  state: string;
}

export function emptyFormAnswersObject(): FormAnswersObject {
  return {
    name: "",
    email: "",
    password: "",
    occupation: "",
    state: "",
  };
}

export function FormOptionsObjectFromJSONTyped(json: any): FormOptionsObject {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    occupations: !exists(json, "occupations") ? undefined : json["occupations"],
    states: !exists(json, "states")
      ? undefined
      : (json["states"] as Array<any>).map(StateObjectFromJSONTyped),
  };
}

export function StateObjectFromJSONTyped(json: any): StateObject {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    name: !exists(json, "name") ? undefined : json["name"],
    abbreviation: !exists(json, "abbreviation")
      ? undefined
      : json["abbreviation"],
  };
}

function exists(json: any, key: string) {
  const value = json[key];
  return value !== null && value !== undefined;
}
