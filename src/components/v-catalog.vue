<template>
<section>
  <div class="container">
    <div class="catalog">
      <h1>Каталог товаров</h1>
      <v-catalog-item></v-catalog-item>
    </div>
  </div>
</section>
</template>

<script>
import vCatalogItem from '../components/v-catalog-item.vue'

export default {
  name: 'Catalog',
  components: {
    vCatalogItem,
  }
}
</script>

<style lang="scss" scoped>
$blue: #296DC1;
$green: #00A82D;

section {
  min-height: calc(100vh - 80px);
}
.container {
  max-width: 1170px;
  margin: 0 auto;
  

  .catalog {
  margin: 0 auto;

    h1 {
      text-align: center;
      font-size: 30px;
      line-height: 39px;
      margin: 0 0 40px 0;

      @media (max-width: 930px) {
        margin: 0 0 28px 0;
      }
      @media (max-width: 510px) {
        margin: 0 0 30px 0;
        font-size: 26px;
        line-height: 33.8px;
      }
    }
  }

  @media (max-width: 1170px) {
    max-width: 930px;
    .catalog {
      max-width: 890px;
    }
  }

  @media (max-width: 930px) {
    max-width: 690px;
    .catalog {
      max-width: 452px;
    }
  }
  @media (max-width: 690px) {
    max-width: 510px;
    .catalog {
      max-width: 452px;
    }
  }
  @media (max-width: 452px) {
    max-width: 290px;
    .catalog {
      max-width: 270px;
    }
  }

}
</style>
