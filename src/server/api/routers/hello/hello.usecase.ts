export const helloUsecase = ({ input }: { input: { text: string } }) => {
  return {
    greeting: `Hello ${input.text}`,
  }
}
