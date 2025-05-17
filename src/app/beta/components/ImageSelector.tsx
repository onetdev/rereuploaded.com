'use client';
import { Card, CardFooter, Button, CardBody, Image } from "@heroui/react";
import ImagePlaceholder from "./ImagePlaceholder";
import { useEditorViewModel } from "./EditorViewModel";
import FileBowserButton from "./FileBrowserButton";

export default function ImageSelector() {
  const editor = useEditorViewModel();

  return (
    <Card radius="lg" className="w-full">
      <CardBody className="overflow-visible p-0">
        <div className="w-full aspect-square flex flex-col justify-center">
          {!editor.inputFile && <ImagePlaceholder blobCount={5} />}
          {!!editor.inputFile && <Image src={URL.createObjectURL(editor.inputFile)} alt="Selected image" width="100%" />}
        </div>
      </CardBody>

      <CardFooter className="absolute justify-center z-10 bottom-1">
        {!editor.inputFile && <FileBowserButton onFileChanged={editor.setInputFile} label="Select image" />}
        {editor.inputFile && (
          <Button
            variant="faded"
            color="primary"
            onPress={() => editor.setInputFile(undefined)}>
            Remove
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
