<template>
  <a class="mainbtn">
    <slot></slot>
  </a>
</template>

<script>
export default {};
</script>

<style>
.mainbtn {
  text-decoration: none;
  cursor: pointer;
  position: relative;
  display: inline-block;
  text-align: center;
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 16px;
  color: #ffe000;
  border-radius: 4px;
  width: max-content;
  margin: 0;
  border: 1px solid var(--vt-c-volite);
  background-color: var(--vt-c-volite) !important; 
  background-image: linear-gradient(120deg, transparent 0%, transparent 50%, white 50%);
  background-size: 250%;
  transition: all 0.6s ease-in-out;
 
}
.mainbtn:hover {
  color: var(--vt-c-volite);
  background-position: 100%;
  transition: all 0.6s ease-in-out;


}

</style>
