const firstName = "Khyber";
const lastName = "Sen";

export const me = {
    firstName,
    lastName,
    name: `${firstName} ${lastName}`,
    email: "kkysen@gmail.com",
} as const;
