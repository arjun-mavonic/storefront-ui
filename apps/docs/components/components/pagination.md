#  Pagination component
Pagination component is a common element to navigate through pages containing many items like products in lists. 

<Generate />

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=13829%3A21387&t=OVcT5DGQ7ibpblL0-1)

<!-- react -->
# Props

| Prop name        | Type         | Default value | Possible values      |
|------------------|--------------|---------------|----------------------|
| `totalItems`     | number       |               |                      |
| `currentPage`    | number       |               |                      |
| `itemsPerPage`   | number       |               |                      |
| `maxVisiblePages`| number       |               |                      |
| `slotPrefix`     | ReactNode    |               |                      |
| `slotSuffix`     | ReactNode    |               |                      |
| `children`       | ReactNode    |               |                      |

## Events

| Event name          |            Trigger             |
| ------------------- | ------------------------------ |
| `handlePageUpdate`  |      click on any page         |
<!-- end react -->

<!-- vue -->
## Props

| Prop name        | Type      | Default value | Possible values      |
|------------------|-----------|---------------|----------------------|
| `totalItems`     | number    |               |                      |
| `currentPage`    | number    |               |                      |
| `itemsPerPage`   | number    |               |                      |
| `maxVisiblePages`| number    |               |                      |


## Slots

| Slot name      |            Description            |
| -------------- | --------------------------------- |
| `default`      | to replace the middle pages       |
| `slotPrefix`   | to replace the start page         |
| `slotSuffix`   | to replace the end page           |


## Events

| Event name              |            Trigger             |
| ----------------------- | ------------------------------ |
| `update:current-page`   |      click on button           |
<!-- end vue -->

## Accessibility notes

Each item has proper `aria-label` property added and `aria-current` for the page that is currently opened. 

## Source code

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfPagination/VsfPagination.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/VsfPagination/VsfPagination.tsx
<!-- end react -->