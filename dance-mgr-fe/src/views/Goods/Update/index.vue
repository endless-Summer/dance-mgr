<template>
  <div>
    <a-modal
      :title="`修改${$$.KEYWORD}`"
      :visible="props.show"
      @ok="submit"
      @cancel="close"
    >
      <a-form :label-col="{ span: 6 }">
        <a-form-item :label="`${$$.KEYWORD}名`">
          <a-input v-model:value="editForm.name" />
        </a-form-item>
        <a-form-item label="价格">
          <a-input-number v-model:value="editForm.price" :min="0" :max="99999999999" />
        </a-form-item>
        <a-form-item label="舞蹈老师">
          <a-input v-model:value="editForm.teacher" />
        </a-form-item>
        <a-form-item label="教学日期">
          <a-date-picker v-model:value="editForm.producedDate" />
        </a-form-item>
        <a-form-item label="分类">
          <a-select
            v-model:value="editForm.classify"
            style="width: 120px"
          >
            <a-select-option
              v-for="item in store.goodClassify"
              :key="item._id"
              :value="item._id"
            >
              {{ item.title }}
            </a-select-option>
          </a-select>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script src="./index.js"></script>
