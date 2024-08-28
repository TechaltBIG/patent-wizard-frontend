import ClaimsDrafting from "./ClaimsDrafting/ClaimsDrafting";
// import QuillEditor from "./ClaimsDrafting/Quilleditor";
import "./ContentMain.css";
import UploadPDF from "./InvetionDisclosure/UploadPDF";
import PatentDrafting from "./PatentDrafting/PatentDrafting";
import ProvisionalDraftingnew from "./ProvisionalDrafting/ProvisionalDrafting-new";

const ContentMain = () => {
  return (
    <div className="main-content-holder">
      <UploadPDF />
      <ProvisionalDraftingnew />
      <ClaimsDrafting />
      {/* <PatentDrafting /> */}
      {/* <QuillEditor /> */}
    </div>
  );
};

export default ContentMain;
