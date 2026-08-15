import createImageUrlBuilder from '@sanity/image-url-builders/lib';
import {defineArrayMember, defineField, defineType} from 'sanity';

export default {
  name: 'sanity.config',
  title: 'Sanity Config',
  type: 'projectConfig',
  datasets: [
    {
      name: 'production',
      title: 'Production',
      default: true,
    },
  ],
  plugins: [
    // Default vision plugin with music
    import vision from '@sanity/vision';
    vision(),
  ],
  schema: {
    types: [
      // Artist schema will be auto-imported
      // Artwork schema will be auto-imported
      // Exhibition schema will be auto-imported
      // Pages schema will be auto-imported
      // Settings schema will be auto-imported
    ],
  },
};