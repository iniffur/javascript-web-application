const NotesApi = require('./notesApi');
require('jest-fetch-mock').enableMocks()

describe('API class', () => {
    it('calls fetch and loads data', (done) => {
      const api = new NotesApi();
  
      fetch.mockResponseOnce(JSON.stringify({
        name: "Some value",
        id: 123
      }));
  
      api.loadNotes((returnedDataFromApi) => {
        expect(returnedDataFromApi.name).toBe("Some value");
        expect(returnedDataFromApi.id).toBe(123);
        done()
      });
    });
  });