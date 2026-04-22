export type Commit = {
  id: string;
  name: string;
  email: string;
  city: string;
  country: string; // ISO alpha-2 code of country of origin (where they'd vote)
  residenceCountry: string; // Where they currently live (diaspora location)
  createdAt: string; // ISO timestamp
  progress: {
    registered: boolean;
    planned: boolean;
    voted: boolean;
  };
};

export type CountryRules = {
  code: string;
  name: string;
  flag: string;
  nextElection: {
    label: string;
    date: string; // ISO date
  };
  registrationDeadline: string; // ISO date
  registrationUrl: string;
  steps: Array<{
    title: string;
    detail: string;
  }>;
  requiredDocuments: string[];
};

export type ReminderEvent = {
  date: string;
  label: string;
  kind: "info" | "deadline" | "action";
};
