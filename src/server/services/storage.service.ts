/**
 * Storage Service Boundary
 * S3-compatible object storage abstraction for product imagery and artisan documents.
 */

export interface IStorageService {
  uploadFile(file: Buffer, fileName: string, mimeType: string): Promise<string>;
  getPresignedUploadUrl(fileName: string, mimeType: string): Promise<{ uploadUrl: string; fileUrl: string }>;
}

export class S3StorageServiceBoundary implements IStorageService {
  async uploadFile(file: Buffer, fileName: string, mimeType: string): Promise<string> {
    // In Demo Mode, returns simulated static image CDN url
    return `https://images.valleybazaar.sample/uploads/${fileName}`;
  }

  async getPresignedUploadUrl(fileName: string, mimeType: string): Promise<{ uploadUrl: string; fileUrl: string }> {
    return {
      uploadUrl: `https://storage.valleybazaar.sample/upload-simulation/${fileName}`,
      fileUrl: `https://storage.valleybazaar.sample/cdn/${fileName}`,
    };
  }
}

export const storageService = new S3StorageServiceBoundary();

