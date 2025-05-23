import {
  BoundObjectType,
  JsonSchemaObjectBinding,
  SchemaObjectType,
  ValidationResults,
} from '@sage-bionetworks/synapse-types'
import mockFileEntityData from './entity/mockFileEntity'
import { JSONSchema7 } from 'json-schema'

const mockFileEntity = mockFileEntityData.entity

export const mockSchemaBinding: JsonSchemaObjectBinding = {
  jsonSchemaVersionInfo: {
    organizationId: '1',
    organizationName: 'org.sagebionetworks',
    schemaId: '1',
    schemaName: 'Mock Schema',
    versionId: '555',
    $id: 'org.sagebionetworks-MockSchema',
    jsonSHA256Hex:
      '5f2cd73c0fe25b30cbee2f213b6d633951f1873ca1911f494d4654f702a69e95',
    createdOn: '2021-04-01T08:00:00.000Z',
    createdBy: '1',
  },
  objectId: 3333,
  objectType: BoundObjectType.entity,
  createdOn: '2021-04-01T08:00:00.000Z',
  createdBy: '1',
}

export const mockSchemaValidationResults: ValidationResults = {
  objectId: mockFileEntity.id!,
  objectType: SchemaObjectType.entity,
  objectEtag: mockFileEntity.etag!,
  schema$id: `https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${mockSchemaBinding.jsonSchemaVersionInfo.$id}`,
  isValid: true,
  validatedOn: '2021-06-28T20:08:44.046Z',
}

export const mockValidationSchema: JSONSchema7 = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  $id: `https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${mockSchemaBinding.jsonSchemaVersionInfo.$id}`,
  type: 'object',
  properties: {
    country: {
      enum: ['USA', 'CA'],
      description: 'Test description for country property',
    },
    showStringArray: {
      type: 'boolean',
    },
  },
  required: ['country'],
  allOf: [
    {
      if: {
        properties: {
          country: {
            const: 'USA',
          },
        },
        required: ['country'],
      },
      then: {
        properties: {
          state: {
            type: 'string',
          },
        },
        required: ['state'],
      },
    },
    {
      if: {
        properties: {
          country: {
            const: 'CA',
          },
        },
        required: ['country'],
      },
      then: {
        properties: {
          province: {
            type: 'string',
          },
        },
        required: ['province'],
      },
    },
    {
      if: {
        properties: {
          showStringArray: {
            const: true,
          },
        },
        required: ['showStringArray'],
      },
      then: {
        properties: {
          stringArray: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
        },
      },
    },
  ],
}

// A JSONSchema that uses the entity `concreteType` field to conditionally display a form field.
export const mockConditionalOnConcreteTypeSchema: JSONSchema7 = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  $id: `https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/org.sagebionetworks-MockConditionalSchema-1.0.0`,
  type: 'object',
  properties: {
    concreteType: {
      type: 'string',
    },
  },
  if: {
    properties: {
      concreteType: {
        const: 'org.sagebionetworks.repo.model.FileEntity',
      },
    },
    required: ['concreteType'],
  },
  then: {
    properties: {
      fileType: {
        type: 'string',
      },
    },
    required: ['fileType'],
  },
}

export const mockFileEntityValidationSchema: JSONSchema7 = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  $id: 'https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/org.sagebionetworks-repo.model.FileEntity-1.0.6',
  properties: {
    concreteType: {
      type: 'string',
      const: 'org.sagebionetworks.repo.model.FileEntity',
    },
    dataFileHandleId: {
      type: 'string',
      description: 'ID of the file associated with this entity.',
    },
    fileNameOverride: {
      type: 'string',
      description:
        'An optional replacement for the name of the uploaded file.  This is distinct from the entity name.  If omitted the file will retain its original name.',
    },
  },
  title: 'File',
  description: 'JSON schema for File POJO',
  allOf: [
    {
      $ref: '#/definitions/org.sagebionetworks-repo.model.VersionableEntity-1.0.6',
    },
  ],
  definitions: {
    'org.sagebionetworks-repo.model.Entity-1.0.3': {
      $schema: 'http://json-schema.org/draft-07/schema#',
      type: 'object',
      properties: {
        id: {
          type: 'string',
          description:
            'The unique immutable ID for this entity.  A new ID will be generated for new Entities.  Once issued, this ID is guaranteed to never change or be re-issued',
        },
        etag: {
          type: 'string',
          description:
            "Synapse employs an Optimistic Concurrency Control (OCC) scheme to handle concurrent updates. Since the E-Tag changes every time an entity is updated it is used to detect when a client's current representation of an entity is out-of-date.",
        },
        name: {
          type: 'string',
          title: 'Name',
          description:
            'The name of this entity.  Must be 256 characters or less. Names may only contain: letters, numbers, spaces, underscores, hyphens, periods, plus signs, apostrophes, and parentheses',
        },
        parentId: {
          type: 'string',
          description:
            'The ID of the Entity that is the parent of this Entity.',
        },
        createdBy: {
          type: 'string',
          title: 'Created By',
          description: 'The ID of the user that created this entity.',
        },
        createdOn: {
          type: 'string',
          title: 'Created On',
          description: 'The date this entity was created.',
          format: 'date-time',
        },
        modifiedBy: {
          type: 'string',
          title: 'Modified By',
          description: 'The ID of the user that last modified this entity.',
        },
        modifiedOn: {
          type: 'string',
          title: 'Modified On',
          description: 'The date this entity was last modified.',
          format: 'date-time',
        },
        description: {
          type: 'string',
          title: 'Description',
          description:
            'The description of this entity.  Must be 1000 characters or less.',
        },
        concreteType: {
          type: 'string',
          description:
            'Indicates which implementation of Entity this object represents.  The value is the fully qualified class name, e.g. org.sagebionetworks.repo.model.FileEntity.',
        },
      },
      description: 'This is the base interface that all Entities implement.',
    },
    'org.sagebionetworks-repo.model.Versionable-1.0.1': {
      $schema: 'http://json-schema.org/draft-07/schema#',
      type: 'object',
      properties: {
        versionNumber: {
          type: 'number',
          description:
            'The version number issued to this version on the object.',
        },
      },
      description: 'JSON schema for Versionable interface',
    },
    'org.sagebionetworks-repo.model.VersionableEntity-1.0.6': {
      $schema: 'http://json-schema.org/draft-07/schema#',
      type: 'object',
      properties: {
        versionLabel: {
          type: 'string',
          title: 'Version',
          description: 'The version label for this entity',
        },
        versionComment: {
          type: 'string',
          title: 'Version Comment',
          description: 'The version comment for this entity',
        },
        isLatestVersion: {
          type: 'boolean',
          description: 'If this is the latest version of the object.',
        },
      },
      description: 'JSON schema for Versionable interface',
      allOf: [
        {
          $ref: '#/definitions/org.sagebionetworks-repo.model.Entity-1.0.3',
        },
        {
          $ref: '#/definitions/org.sagebionetworks-repo.model.Versionable-1.0.1',
        },
      ],
    },
  },
}

export const mockProjectValidationSchema: JSONSchema7 = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  $id: 'https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/org.sagebionetworks-repo.model.Project-1.0.5',
  properties: {
    alias: {
      type: 'string',
      description: 'The project alias for use in friendly project urls.',
    },
    concreteType: {
      type: 'string',
      const: 'org.sagebionetworks.repo.model.Project',
    },
  },
  title: 'Project',
  description:
    'A Project is a top-level container for organizing data in Synapse.',
  allOf: [
    {
      $ref: '#/definitions/org.sagebionetworks-repo.model.Entity-1.0.3',
    },
  ],
  definitions: {
    'org.sagebionetworks-repo.model.Entity-1.0.3': {
      $schema: 'http://json-schema.org/draft-07/schema#',
      type: 'object',
      properties: {
        id: {
          type: 'string',
          description:
            'The unique immutable ID for this entity.  A new ID will be generated for new Entities.  Once issued, this ID is guaranteed to never change or be re-issued',
        },
        etag: {
          type: 'string',
          description:
            "Synapse employs an Optimistic Concurrency Control (OCC) scheme to handle concurrent updates. Since the E-Tag changes every time an entity is updated it is used to detect when a client's current representation of an entity is out-of-date.",
        },
        name: {
          type: 'string',
          title: 'Name',
          description:
            'The name of this entity.  Must be 256 characters or less. Names may only contain: letters, numbers, spaces, underscores, hyphens, periods, plus signs, apostrophes, and parentheses',
        },
        parentId: {
          type: 'string',
          description:
            'The ID of the Entity that is the parent of this Entity.',
        },
        createdBy: {
          type: 'string',
          title: 'Created By',
          description: 'The ID of the user that created this entity.',
        },
        createdOn: {
          type: 'string',
          title: 'Created On',
          description: 'The date this entity was created.',
          format: 'date-time',
        },
        modifiedBy: {
          type: 'string',
          title: 'Modified By',
          description: 'The ID of the user that last modified this entity.',
        },
        modifiedOn: {
          type: 'string',
          title: 'Modified On',
          description: 'The date this entity was last modified.',
          format: 'date-time',
        },
        description: {
          type: 'string',
          title: 'Description',
          description:
            'The description of this entity.  Must be 1000 characters or less.',
        },
        concreteType: {
          type: 'string',
          description:
            'Indicates which implementation of Entity this object represents.  The value is the fully qualified class name, e.g. org.sagebionetworks.repo.model.FileEntity.',
        },
      },
      description: 'This is the base interface that all Entities implement.',
    },
  },
}
