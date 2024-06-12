() => {
  interface Clients {
    name: string;
    age?: number;
    address: Address;
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const client: Clients = {
    name: "Fernando",
    age: 26,
    address: {
      id: 125,
      zip: "KYZ SUD",
      city: "Ottawa",
    },
  };

  const client2: Clients = {
    name: "Melissa",
    age: 26,
    address: {
      id: 12,
      zip: "FASF",
      city: "Total war",
    },
  };
};
