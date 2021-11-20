import S from "@sanity/desk-tool/structure-builder";
import { HiHome, HiUser } from "react-icons/hi";

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem().title("Home Page").child(S.document().schemaType("homePage").documentId("homePage")).icon(HiHome),
      S.listItem().title("About Page").child(S.document().schemaType("aboutPage").documentId("aboutPage")).icon(HiUser),
      ...S.documentTypeListItems().filter((listItem) => !["homePage", "aboutPage"].includes(listItem.getId())),
    ]);
