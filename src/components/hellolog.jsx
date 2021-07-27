import { useEffect } from "react";

export function HelloLog() {
  useEffect(() => {
    console.log('Hello fellow developer, interested for a new challenge? Learn more on https://utsubo.co')
  }, [])
  return null;
}
