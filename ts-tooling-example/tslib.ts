/** Safely returns a property from an object */
export function getProp<Object, Key extends keyof Object>(
  o: Object,
  propertyName: Key
) {
  return o?.[propertyName] ?? undefined;
}
