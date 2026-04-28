import type { Member } from ".";

/**
 * Mock getCurrentMember - returns null (no auth in standalone mode)
 */
export const getCurrentMember = async (): Promise<Member | null> => {
  return null;
};
