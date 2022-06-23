/// <reference path="crud.d.ts" />
import { RowID, RowElement } from "./interface";
import * as CRUD from './crud';

const row: RowElement = {
    firstName: 'Guillaume',
    lastName : 'Salva',
}
const newRowID: RowID = CRUD.insertRow(row);
const updateDRow: RowElement = {...row, age:23}
CRUD.updateRow(newRowID, updateDRow);
CRUD.deleteRow(newRowID);