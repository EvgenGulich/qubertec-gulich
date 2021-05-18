<template>
  <div class="result__inform">
    <div class="table__header">
      <div class="item__one table__header_item">חוקלל חלשנ</div>
      <div class="item__two table__header_item">הסילופ ‘סמ</div>
      <div class="item__three table__header_item">חוטיבה תליחת</div>
      <div class="item__four table__header_item">העצהה תחיתפ</div>
      <div class="item__five table__header_item">תוהז תדועת</div>
      <div class="item__six table__header_item">יושיר ‘סמ</div>
      <div class="item__seven table__header_item">חטובמ םש</div>
      <div class="item__eight table__header_item">רצומ</div>
      <div class="item__nine table__header_item">ףנע</div>
    </div>
    <div class="table__tr" v-for="item of resultData" :key="item.id">
      <div class="item__one table__tr_item">
        <div class="item__cheked" v-if="item.cheked">
          <img
            class="item__cheked_icon"
            src="../../assets/image/checked.svg"
            alt="cheked"
          />
        </div>
        <p class="item__cheked_mob" v-if="item.cheked">(חוקלל החלשנ)</p>
      </div>
      <div class="item__two table__tr_item">
        <div class="item__container">
          <div class="item__discription">הסילופ</div>
          {{ item.id }}
        </div>
      </div>
      <div class="item__three table__tr_item">
        <div class="item__container">
          <div class="item__discription">הסילופ</div>
          {{ item.date }}
        </div>
      </div>
      <div class="item__four table__tr_item">
        <div class="item__container">
          <div class="item__discription">העצה תחיתפ</div>
          {{ item.dataStart }}
        </div>
      </div>
      <div class="item__five table__tr_item">
        <div class="item__container">
          <div class="item__discription">חוטיב תליחת</div>
          {{ item.number }}
        </div>
      </div>
      <div class="item__six table__tr_item">
        <div class="item__container">
          <div class="item__discription">תוהז תדועת</div>
          {{ item.phone }}
        </div>
      </div>
      <div class="item__seven table__tr_item">
        <div class="item__container">
          <div class="item__discription">יושיר רפסמ</div>
          {{ item.desOne }}
        </div>
      </div>
      <div class="item__eight table__tr_item">
        <div class="item__container">
          <div class="item__discription">חטובמ םש</div>
          {{ item.desTwo }}
        </div>
      </div>
      <div class="item__nine table__tr_item">
        <div class="item__container">
          <div class="item__discription">ביטקלוק</div>
          {{ item.code }}
        </div>
      </div>
      <div class="table__tr_tools">
        <div class="flex">
          <div class="tools__item">
            <div class="tools__item_icon">
              <img class="icon__des" src="../../assets/image/letter.svg" />
              <img class="icon__mob" src="../../assets/image/letter-w.svg" />
            </div>
            <div class="tools__item_text">
              תכירע
              <tr />
              העצהה
            </div>
          </div>
          <div class="tools__item">
            <div class="tools__item_icon">
              <img class="icon__des" src="../../assets/image/pane.svg" />
              <img class="icon__mob" src="../../assets/image/pane-w.svg" />
            </div>
            <div class="tools__item_text">
              תחילש
              <tr />
              העצהה
            </div>
          </div>
        </div>
        <div class="flex">
          <img src="../../assets/image/car.svg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    resultData: {
      type: Array,
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.table__header {
  display: flex;

  @media screen and (max-width: 768px) {
    display: none;
  }
}

.table__header_item {
  color: white;
  text-align: center;
}

.item__one {
  width: 12%;

  @media screen and (max-width: 768px) {
    order: 4;
    width: 50%;
    display: flex;
  }
}
.item__two {
  width: 11.5%;

  @media screen and (max-width: 768px) {
    order: 5;
    width: 50%;
  }
}
.item__three {
  width: 11.5%;

  @media screen and (max-width: 768px) {
    order: 3;
    width: 50%;
  }
}
.item__four {
  width: 11.5%;

  @media screen and (max-width: 768px) {
    order: 2;
    width: 50%;
  }
}
.item__five {
  width: 11.5%;

  @media screen and (max-width: 768px) {
    order: 1;
    width: 50%;
  }
}
.item__six {
  width: 11.5%;

  @media screen and (max-width: 768px) {
    order: 0;
    width: 50%;
  }
}
.item__seven {
  width: 13%;

  @media screen and (max-width: 768px) {
    order: -1;
    width: 100%;
  }
}
.item__eight {
  width: 13%;

  @media screen and (max-width: 768px) {
    width: 100%;
    order: -2;
  }
}
div.item__nine {
  flex-grow: 1;
  border-right: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
}
.item__cheked {
  display: flex;
  width: 100%;

  @media screen and (max-width: 768px) {
    display: none;
  }
}
.item__cheked_mob {
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    color: #009c41;
    margin: auto 0 0 auto;
  }
}
.item__cheked_icon {
  margin: auto;
}
.table__tr {
  position: relative;
  display: flex;
  width: 100%;
  height: 2.8rem;
  background: white;
  border-radius: 2.2rem;
  padding: 1px;
  margin: 0.8rem 0;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    height: auto;
    flex-wrap: wrap;
    padding: 0.625rem;
    color: #21325e;
    font-weight: bold;
    margin: 1.6rem 0;
  }

  &:hover {
    background: #ff7728;

    @media screen and (max-width: 768px) {
      background: white;
    }

    .item__container {
      color: white;

      @media screen and (max-width: 768px) {
        color: black;
      }
    }

    .table__tr_tools {
      display: flex;
    }
  }
}
.table__tr_item {
  display: flex;
  margin: 0.5rem 0;
  padding: 0 0.5rem;
  border-right: 0.0625rem solid #e5e5e5;

  @media screen and (max-width: 768px) {
    border-right: none;
  }
}
.item__container {
  text-align: center;
  width: 100%;

  @media screen and (max-width: 768px) {
    text-align: right;
  }
}
.table__tr_tools {
  position: absolute;
  top: 0;
  left: 100%;
  display: none;
  padding-left: 1rem;

  @media screen and (max-width: 768px) {
    position: relative;
    order: -3;
    left: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 0.875rem;
    border-bottom: 0.125rem #1d4076 solid;
  }
}
.tools__item {
  &:first-child {
    margin-right: 0.625rem;
  }
}
.tools__item_icon {
  width: 2.8rem;
  height: 2.8rem;
  background: white;
  border-radius: 50%;
  display: flex;

  @media screen and (max-width: 768px) {
    background: #009c41;
  }

  img {
    margin: auto;
  }
}
.tools__item_text {
  color: white;

  @media screen and (max-width: 768px) {
    display: none;
  }
}
.item__discription {
  display: none;
  color: #797979;

  @media screen and (max-width: 768px) {
    display: block;
  }
}
.icon__des {
  display: block;

  @media screen and (max-width: 768px) {
    display: none;
  }
}
.icon__mob {
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
}
.flex {
  display: flex;
}
</style>
