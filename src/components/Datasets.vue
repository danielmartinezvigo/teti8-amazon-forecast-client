<template>
  <section>
    <b-table :data="isEmpty ? [] : data" :bordered="isBordered" :striped="isStriped" :narrowed="isNarrowed" :hoverable="isHoverable" :loading="isLoading" :focusable="isFocusable" :mobile-cards="hasMobileCards">
      <template slot-scope="props">
        <b-table-column field="DatasetName" label="DatasetName" class="custom-small" width="1">
          {{ props.row.DatasetName }}
        </b-table-column>

        <b-table-column field="DatasetType" label="DatasetType" class="custom-small" width="1">
          {{ props.row.DatasetType }}
        </b-table-column>

        <b-table-column field="Domain" label="Domain" centered  class="custom-small" width="1">
          <span class="tag is-info">
            {{ props.row.Domain }}
          </span>
        </b-table-column>

        <b-table-column field="CreationTime" label="CreationTime" centered class="custom-small" width="1">
          <span class="tag">
            {{ new Date(props.row.CreationTime).toLocaleDateString() }}
          </span>
        </b-table-column>

        <b-table-column field="LastModificationTime" label="LastModificationTime" centered class="custom-small" width="1">
          <span class="tag">
            {{ new Date(props.row.LastModificationTime).toLocaleDateString() }}
          </span>
        </b-table-column>
      </template>

      <template slot="empty">
        <section class="section">
          <div class="content has-text-grey has-text-centered">
            <p>
              <b-icon icon="emoticon-sad" size="is-large"> </b-icon>
            </p>
            <p>Nothing here.</p>
          </div>
        </section>
      </template>
    </b-table>
  </section>
</template>

<script>
export default {
  data() {
    return {
      data:[],
      isEmpty: false,
      isBordered: false,
      isStriped: true,
      isNarrowed: false,
      isHoverable: true,
      isFocusable: true,
      isLoading: false,
      hasMobileCards: true
    }
  },
  mounted() {
    this.isLoading = true;
    this.axios
      .get(window.backend + '/forecast/service/datasets')
      .then(response => (this.data = response.data.Datasets))
      .finally(() => {
        this.isLoading = false
      });
  }
}
</script>
