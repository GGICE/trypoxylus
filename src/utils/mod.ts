// deno-lint-ignore no-explicit-any
export function isIgnoreError(error: any) {
  if (error.toString().indexOf("No such file or directory") !== -1) {
    return true;
  }
  return false;
}
