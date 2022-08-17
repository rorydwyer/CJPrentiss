import S from "@sanity/desk-tool/structure-builder";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { HiHome, HiUser, HiPhotograph, HiAcademicCap } from "react-icons/hi";

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem().title("Home Page").child(S.document().schemaType("homePage").documentId("homePage")).icon(HiHome),
      S.listItem().title("About Page").child(S.document().schemaType("aboutPage").documentId("aboutPage")).icon(HiUser),
      orderableDocumentListDeskItem({ type: "work", title: "Work", icon: HiPhotograph }),
      orderableDocumentListDeskItem({ type: "publications", title: "Publications", icon: HiAcademicCap }),
    ]);
