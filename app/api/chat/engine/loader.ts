import { FILE_EXT_TO_READER, SimpleDirectoryReader } from "llamaindex";
import { PDFReader } from 'llamaindex/readers/PDFReader';
// import { PyMuPDFReader } from 'llamaindex/readers/PyMuPDFReader';
// import { LlamaParseReader } from "llamaindex/readers/LlamaParseReader";

export const DATA_DIR = "./data";

// export async function getDocuments() {
//   return await new SimpleDirectoryReader().loadData({
//     directoryPath: DATA_DIR,
//   });

export async function getDocuments() {
  var parser = new PDFReader();
  var file_extractor = {".pdf": parser};
  return await new SimpleDirectoryReader().loadData({
    directoryPath: DATA_DIR,
    fileExtToReader: file_extractor
  });

// export async function getDocuments() {
//   const reader = new SimpleDirectoryReader();
//   // Load PDFs using LlamaParseReader
//   return await reader.loadData({
//     directoryPath: DATA_DIR,
//     fileExtToReader: {
//       pdf: new LlamaParseReader({ resultType: "markdown" }),
//     },
//   });


}