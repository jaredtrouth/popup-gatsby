import CMS from 'netlify-cms-app';
import MenuSectionPreview from './preview-templates/MenuSectionPreview';

CMS.registerPreviewStyle("/preview.css");
CMS.registerPreviewTemplate('entrees', MenuSectionPreview);
CMS.registerPreviewTemplate("sides", MenuSectionPreview);
CMS.registerPreviewTemplate("addons", MenuSectionPreview);
CMS.registerPreviewTemplate("drinks", MenuSectionPreview);
