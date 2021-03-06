// automatically generated by the FlatBuffers compiler, do not modify
goog.module("module$targets$es5$cls$format$Message_generated");
goog.module.declareLegacyNamespace();
var Schema_ = goog.require("module$targets$es5$cls$format$Schema_generated");
/**
 * @const
 * @namespace
 */
var org = Schema_.org;

/**
 * @const
 * @namespace
 */
org.apache = org.apache || {};

/**
 * @const
 * @namespace
 */
org.apache.arrow = org.apache.arrow || {};

/**
 * @const
 * @namespace
 */
org.apache.arrow.flatbuf = org.apache.arrow.flatbuf || {};

/**
 * ----------------------------------------------------------------------
 * The root Message type
 * This union enables us to easily send different message types without
 * redundant storage, and in the future we can easily add new message types.
 *
 * Arrow implementations do not need to implement all of the message types,
 * which may include experimental metadata types. For maximum compatibility,
 * it is best to send data using RecordBatch
 *
 * @enum
 */
org.apache.arrow.flatbuf.MessageHeader = {
  NONE: 0, 0: 'NONE',
  Schema: 1, 1: 'Schema',
  DictionaryBatch: 2, 2: 'DictionaryBatch',
  RecordBatch: 3, 3: 'RecordBatch',
  Tensor: 4, 4: 'Tensor',
};

/**
 * ----------------------------------------------------------------------
 * Data structures for describing a table row batch (a collection of
 * equal-length Arrow arrays)
 * Metadata about a field at some level of a nested type tree (but not
 * its children).
 *
 * For example, a List<Int16> with values [[1, 2, 3], null, [4], [5, 6], null]
 * would have {length: 5, null_count: 2} for its List node, and {length: 6,
 * null_count: 0} for its Int16 node, as separate FieldNode structs
 *
 * @constructor
 */
org.apache.arrow.flatbuf.FieldNode = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {org.apache.arrow.flatbuf.FieldNode}
 */
org.apache.arrow.flatbuf.FieldNode.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * The number of value slots in the Arrow array at this level of a nested
 * tree
 *
 * @returns {flatbuffers.Long}
 */
org.apache.arrow.flatbuf.FieldNode.prototype.length = function() {
  return this.bb.readInt64(this.bb_pos);
};

/**
 * The number of observed nulls. Fields with null_count == 0 may choose not
 * to write their physical validity bitmap out as a materialized buffer,
 * instead setting the length of the bitmap buffer to 0.
 *
 * @returns {flatbuffers.Long}
 */
org.apache.arrow.flatbuf.FieldNode.prototype.nullCount = function() {
  return this.bb.readInt64(this.bb_pos + 8);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} length
 * @param {flatbuffers.Long} null_count
 * @returns {flatbuffers.Offset}
 */
org.apache.arrow.flatbuf.FieldNode.createFieldNode = function(builder, length, null_count) {
  builder.prep(8, 16);
  builder.writeInt64(null_count);
  builder.writeInt64(length);
  return builder.offset();
};

/**
 * A data header describing the shared memory layout of a "record" or "row"
 * batch. Some systems call this a "row batch" internally and others a "record
 * batch".
 *
 * @constructor
 */
org.apache.arrow.flatbuf.RecordBatch = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {org.apache.arrow.flatbuf.RecordBatch}
 */
org.apache.arrow.flatbuf.RecordBatch.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {org.apache.arrow.flatbuf.RecordBatch=} obj
 * @returns {org.apache.arrow.flatbuf.RecordBatch}
 */
org.apache.arrow.flatbuf.RecordBatch.getRootAsRecordBatch = function(bb, obj) {
  return (obj || new org.apache.arrow.flatbuf.RecordBatch).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * number of records / rows. The arrays in the batch should all have this
 * length
 *
 * @returns {flatbuffers.Long}
 */
org.apache.arrow.flatbuf.RecordBatch.prototype.length = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.readInt64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * Nodes correspond to the pre-ordered flattened logical schema
 *
 * @param {number} index
 * @param {org.apache.arrow.flatbuf.FieldNode=} obj
 * @returns {org.apache.arrow.flatbuf.FieldNode}
 */
org.apache.arrow.flatbuf.RecordBatch.prototype.nodes = function(index, obj) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? (obj || new org.apache.arrow.flatbuf.FieldNode).__init(this.bb.__vector(this.bb_pos + offset) + index * 16, this.bb) : null;
};

/**
 * @returns {number}
 */
org.apache.arrow.flatbuf.RecordBatch.prototype.nodesLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * Buffers correspond to the pre-ordered flattened buffer tree
 *
 * The number of buffers appended to this list depends on the schema. For
 * example, most primitive arrays will have 2 buffers, 1 for the validity
 * bitmap and 1 for the values. For struct arrays, there will only be a
 * single buffer for the validity (nulls) bitmap
 *
 * @param {number} index
 * @param {org.apache.arrow.flatbuf.Buffer=} obj
 * @returns {org.apache.arrow.flatbuf.Buffer}
 */
org.apache.arrow.flatbuf.RecordBatch.prototype.buffers = function(index, obj) {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? (obj || new org.apache.arrow.flatbuf.Buffer).__init(this.bb.__vector(this.bb_pos + offset) + index * 24, this.bb) : null;
};

/**
 * @returns {number}
 */
org.apache.arrow.flatbuf.RecordBatch.prototype.buffersLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Builder} builder
 */
org.apache.arrow.flatbuf.RecordBatch.startRecordBatch = function(builder) {
  builder.startObject(3);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} length
 */
org.apache.arrow.flatbuf.RecordBatch.addLength = function(builder, length) {
  builder.addFieldInt64(0, length, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} nodesOffset
 */
org.apache.arrow.flatbuf.RecordBatch.addNodes = function(builder, nodesOffset) {
  builder.addFieldOffset(1, nodesOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
org.apache.arrow.flatbuf.RecordBatch.startNodesVector = function(builder, numElems) {
  builder.startVector(16, numElems, 8);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} buffersOffset
 */
org.apache.arrow.flatbuf.RecordBatch.addBuffers = function(builder, buffersOffset) {
  builder.addFieldOffset(2, buffersOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
org.apache.arrow.flatbuf.RecordBatch.startBuffersVector = function(builder, numElems) {
  builder.startVector(24, numElems, 8);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
org.apache.arrow.flatbuf.RecordBatch.endRecordBatch = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * ----------------------------------------------------------------------
 * For sending dictionary encoding information. Any Field can be
 * dictionary-encoded, but in this case none of its children may be
 * dictionary-encoded.
 * There is one vector / column per dictionary
 *
 *
 * @constructor
 */
org.apache.arrow.flatbuf.DictionaryBatch = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {org.apache.arrow.flatbuf.DictionaryBatch}
 */
org.apache.arrow.flatbuf.DictionaryBatch.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {org.apache.arrow.flatbuf.DictionaryBatch=} obj
 * @returns {org.apache.arrow.flatbuf.DictionaryBatch}
 */
org.apache.arrow.flatbuf.DictionaryBatch.getRootAsDictionaryBatch = function(bb, obj) {
  return (obj || new org.apache.arrow.flatbuf.DictionaryBatch).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {flatbuffers.Long}
 */
org.apache.arrow.flatbuf.DictionaryBatch.prototype.id = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.readInt64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @param {org.apache.arrow.flatbuf.RecordBatch=} obj
 * @returns {org.apache.arrow.flatbuf.RecordBatch|null}
 */
org.apache.arrow.flatbuf.DictionaryBatch.prototype.data = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? (obj || new org.apache.arrow.flatbuf.RecordBatch).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
org.apache.arrow.flatbuf.DictionaryBatch.startDictionaryBatch = function(builder) {
  builder.startObject(2);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} id
 */
org.apache.arrow.flatbuf.DictionaryBatch.addId = function(builder, id) {
  builder.addFieldInt64(0, id, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} dataOffset
 */
org.apache.arrow.flatbuf.DictionaryBatch.addData = function(builder, dataOffset) {
  builder.addFieldOffset(1, dataOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
org.apache.arrow.flatbuf.DictionaryBatch.endDictionaryBatch = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @constructor
 */
org.apache.arrow.flatbuf.Message = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {org.apache.arrow.flatbuf.Message}
 */
org.apache.arrow.flatbuf.Message.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {org.apache.arrow.flatbuf.Message=} obj
 * @returns {org.apache.arrow.flatbuf.Message}
 */
org.apache.arrow.flatbuf.Message.getRootAsMessage = function(bb, obj) {
  return (obj || new org.apache.arrow.flatbuf.Message).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {org.apache.arrow.flatbuf.MetadataVersion}
 */
org.apache.arrow.flatbuf.Message.prototype.version = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? /** @type {org.apache.arrow.flatbuf.MetadataVersion} */ (this.bb.readInt16(this.bb_pos + offset)) : org.apache.arrow.flatbuf.MetadataVersion.V1;
};

/**
 * @returns {org.apache.arrow.flatbuf.MessageHeader}
 */
org.apache.arrow.flatbuf.Message.prototype.headerType = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? /** @type {org.apache.arrow.flatbuf.MessageHeader} */ (this.bb.readUint8(this.bb_pos + offset)) : org.apache.arrow.flatbuf.MessageHeader.NONE;
};

/**
 * @param {flatbuffers.Table} obj
 * @returns {?flatbuffers.Table}
 */
org.apache.arrow.flatbuf.Message.prototype.header = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.__union(obj, this.bb_pos + offset) : null;
};

/**
 * @returns {flatbuffers.Long}
 */
org.apache.arrow.flatbuf.Message.prototype.bodyLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 10);
  return offset ? this.bb.readInt64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 */
org.apache.arrow.flatbuf.Message.startMessage = function(builder) {
  builder.startObject(4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {org.apache.arrow.flatbuf.MetadataVersion} version
 */
org.apache.arrow.flatbuf.Message.addVersion = function(builder, version) {
  builder.addFieldInt16(0, version, org.apache.arrow.flatbuf.MetadataVersion.V1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {org.apache.arrow.flatbuf.MessageHeader} headerType
 */
org.apache.arrow.flatbuf.Message.addHeaderType = function(builder, headerType) {
  builder.addFieldInt8(1, headerType, org.apache.arrow.flatbuf.MessageHeader.NONE);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} headerOffset
 */
org.apache.arrow.flatbuf.Message.addHeader = function(builder, headerOffset) {
  builder.addFieldOffset(2, headerOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} bodyLength
 */
org.apache.arrow.flatbuf.Message.addBodyLength = function(builder, bodyLength) {
  builder.addFieldInt64(3, bodyLength, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
org.apache.arrow.flatbuf.Message.endMessage = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
org.apache.arrow.flatbuf.Message.finishMessageBuffer = function(builder, offset) {
  builder.finish(offset);
};

// Exports for Node.js and RequireJS
exports.org = org;
