import data from "../data/data";

class DataNode {
  constructor(data) {
    this.allProducts = data.items;
    this.compileNode = data.groups.reduce((acc, item, index) => {
      if (!item.idParent) {
        item.children = data.groups.filter((el) => {
          return el.idParent === item.id;
        });

        item.children.forEach((itemGroup) => {
          itemGroup.children = data.items.filter(
            (item) => item.idGroup == itemGroup.id
          );
        });

        console.log(item);

        acc.push(item);
      }
      return acc;
    }, []);
  }

  getCompile() {
    return this.compileNode;
  }

  getAllProduct() {
    return this.allProducts;
  }
}

export const compileData = new DataNode(data);
