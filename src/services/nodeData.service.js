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
          itemGroup.children = data.items.filter((elements, index) => {
            return elements.idGroup == itemGroup.id;
          });
        });

        acc.push(item);
      }

      return acc;
    }, []);

    let crumb = [];

    function createCrumb(value) {
      for (let i = 0; i < value.length; i++) {
        if (Object.keys(value[i]).includes("children") == true) {
          crumb.push(value[i].name);
          createCrumb(value[i].children);
        } else if (Object.keys(value[i]).includes("children") != true) {
          crumb.push(value[i].product.name);

          value[i].product.crumb = [...crumb];
          console.log(crumb, "crumb");
          crumb = [...crumb.slice(0, -1)];
        }
      }

      crumb = [...crumb.slice(0, -1)];
    }

    createCrumb(this.compileNode);
  }

  getCompile() {
    return this.compileNode;
  }

  getAllProduct() {
    return this.allProducts;
  }
}

export const compileData = new DataNode(data);
