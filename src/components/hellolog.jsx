import { useEffect } from "react";

export function HelloLog() {
  useEffect(() => {
    console.log('Hello fellow developer, looking for a job in Japan?')
  }, [])
  return null;
}
