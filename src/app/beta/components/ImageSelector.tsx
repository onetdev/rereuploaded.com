import { Card, CardFooter, Button, CardBody } from "@heroui/react";
import ImagePlaceholder from "./ImagePlaceholder";

export default function ImageSelector() {
  return (
    <Card isFooterBlurred radius="lg">
      <CardBody className="overflow-visible py-2">
        <div className="w-full aspect-square"><ImagePlaceholder blobCount={5} /></div>
      </CardBody>

      <CardFooter className="justify-between border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 shadow-small ml-1 z-10">
        <p>Choose an image</p>
        <Button
          color="default"
          radius="lg"
          size="md"
          variant="flat"
        >
          Browse
        </Button>
      </CardFooter>
    </Card>
  );
}
