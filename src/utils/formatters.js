/**
 * Capitalize the first letter of a string
 */
export const capitalizeFirstLetter = (val) => {
  if (!val) return ''
  return `${val.charAt(0).toUpperCase()}${val.slice(1)}`
}

/** Cách xử lý bug logic thư viện DnD-kit khi Column là rỗng:
* Phía FE sẽ tạo ra một card đặt biệt: PlaceholderCard, không liên quan tới BackEnd.
* Card đặc biệt này sẽ được ẩn ở giao diện UI người dùng.
* Cấu trúc Id của cái card này để Unique rất đơn giản, không cần phải làm random phức tạp:
* "columnId-pleaceholder-card" (mỗi column chỉ có thể có tối đa 1 cái Placeholder Card)
* Quan trọng khi tạo : phải đầy đủ: (_id, boardId, columnId, FE_placeholderCard )
*/
export const generatePlaceholderCard = (column) => {
  return {
    _id: `${column._id}-placeholder-card`,
    boardId: column.boardId,
    columnId: column._id,
    FE_placeholderCard: true
  }
}
