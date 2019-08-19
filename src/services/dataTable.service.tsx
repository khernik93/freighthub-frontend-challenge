export default class DataTableService {

  static config = {
    ordering: true,
    lengthChange: false,
    pageLength: 20,
    columnDefs: [
      { targets: [2, 3, 4, 5, 6, 7, 8], searchable: false }
    ],
    language: {
      search: "Search by ID: "
    }
  }

}
