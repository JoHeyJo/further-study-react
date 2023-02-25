
function choice(items){
  const selected = Math.floor(Math.random() * items.length)
  return items[selected];
}

function remove(items, item){
  const index = items.indexOf(item);
  return index !== -1 ? items.splice(index,1) : undefined;
}

export { choice, remove };