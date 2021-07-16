
export const USER_ID = -2
export const BAD_INDEX = -1

export function isInvalid(value) {
    return (value == null || value == "");
};

export function isCurrentUser(id) {
    return id == USER_ID
}