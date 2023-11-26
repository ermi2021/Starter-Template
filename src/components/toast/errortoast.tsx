export default function ErrorToast(props: {
  message: string;
  title: string;
  toast: any;
}) {
  return props.toast({
    position: "top-right",
    title: props.title,
    description: props.message,
    status: "error",
    duration: 3000,
    isClosable: true,
  });
}
