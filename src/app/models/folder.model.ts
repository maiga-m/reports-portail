import { HttpResponse } from "@angular/common/http";
import { ICatalogItem } from "./catalogItem.model";

export enum CatalogItemType { 
    Unknown = "Unknown",
    Folder = "Folder",
    Report = "Report",
    DataSource = "DataSource",
    DataSet = "DataSet",
    Component = "Component",
    Resource = "Resource",
    Kpi = "Kpi",
    MobileReport = "MobileReport",
    LinkedReport = "LinkedReport",
    ReportModel = "ReportModel",
    PowerBIReport = "PowerBIReport",
    ExcelWorkbook = "ExcelWorkbook"
}

export interface IFolder {
    Id: string;
    Name: string;
    Description: string;
    Path: string;
    Type: CatalogItemType;
    Hidden: boolean;
    Size: number;
    ModifiedBy: string;
    ModifiedDate: Date;
    CreatedBy: string;
    CreatedDate: Date;
    ParentFolderId: string;
    ContentType: string;
    Content: string;
    IsFavorite: boolean;
    catalogItems: ICatalogItem[];
}

export class Folder implements IFolder{
    constructor(
        public Id: string,
        public Name: string,
        public Description: string,
        public Path: string,
        public Type: CatalogItemType.Folder,
        public Hidden: boolean,
        public Size: number,
        public ModifiedBy: string,
        public ModifiedDate: Date,
        public CreatedBy: string,
        public CreatedDate: Date,
        public ParentFolderId: string,
        public ContentType: string,
        public Content: string,
        public IsFavorite: boolean,
        public catalogItems: ICatalogItem[]
    ){
    }
}

export function getIdentifier(folder: IFolder): string | undefined {
    return folder.Id;
  }





