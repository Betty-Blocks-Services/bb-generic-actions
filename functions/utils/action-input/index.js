class ActionInput {
  parseCollection(collection) {
    return collection.data;
  }

  parseRecord(record) {
    return record.data;
  }

  parseMap(map) {
    return map.reduce((prev, curr) => ({ ...prev, [curr.key]: curr.value }), {});
  }
}
const parseActionInput = new ActionInput();

export default parseActionInput;
