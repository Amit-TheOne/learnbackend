import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
  {
    videoFile: {
      type: String, // cloudnary url
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    thumbnail: {
      type: String, // cloudnary url
      required: true
    },
    duration: {
      type: Number, // From cloundary : provides the duration of the video
      required: true
    },
    views: {
      type: Number,
      default: 0
    },
    isPublished: {
      type: Boolean,
      default: true
    },
  },
  {
    timestamps: true
  }
)

videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video", videoSchema);