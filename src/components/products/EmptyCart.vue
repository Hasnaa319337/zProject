<template>
  <div class="empty_cart">
    <div class="image">
      <img
        src="../../assets/images/NoItemsCart.ec0b0f3.svg"
        alt="No Item"
        class="img-fluid"
      />
    </div>
    <p class="emptyP">
      There Is No Items Yet, Add Some.


    </p>
  </div>
</template>

<script>
export default {};
</script>

<style>
.empty_cart {
  color: var(--vt-c-volite);
  font-size: 20px;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 18px;
}
.empty_cart p {
  width: 75%;
  text-align: center;
}


</style>
