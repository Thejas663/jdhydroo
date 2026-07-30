import type { ReactNode } from 'react';
import type { Product } from '../../data/products';

interface TechnicalDataTableProps {
  product: Product;
}

/**
 * Master Brief v2 §9 — the spec-table pattern for product pages (head
 * range, capacity, shaft orientation, regulation type), set in the mono
 * utility face. Only renders rows we actually have real data for — never
 * fabricates a value. Returns null if there isn't enough to justify a
 * table (family alone isn't enough). Covers both turbine-shaped specs
 * (head/flow/capacity range) and valve-shaped specs (model, pressure
 * rating, size range) — a product only ever populates the fields that
 * apply to it.
 */
export function TechnicalDataTable({ product }: TechnicalDataTableProps) {
  const rows: { label: string; value: ReactNode }[] = [];

  if (product.model) {
    rows.push({ label: 'Model', value: product.model });
  }
  rows.push({ label: 'Family', value: product.family === 'turbine' ? 'Turbine' : 'Valve' });

  if (product.headRangeM) {
    rows.push({ label: 'Head Range', value: product.headRangeM });
  }
  if (product.flowRangeM3S) {
    rows.push({ label: 'Flow Range', value: product.flowRangeM3S });
  }
  if (product.capacityRangeMW) {
    rows.push({ label: 'Capacity Range', value: product.capacityRangeMW });
  }
  if (product.pressureRating) {
    rows.push({ label: 'Pressure Rating', value: product.pressureRating });
  }
  if (product.sizeRangeDN) {
    rows.push({ label: 'Size Range', value: product.sizeRangeDN });
  }
  if (product.datasheetPdf) {
    rows.push({
      label: 'Datasheet',
      value: (
        <a
          href={product.datasheetPdf}
          className="text-teal-text hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download PDF
        </a>
      ),
    });
  }

  if (rows.length < 2) return null;

  return (
    <div className="mb-10 border border-border rounded-sm overflow-hidden">
      <div className="px-5 py-3 bg-spillway border-b border-border">
        <span className="font-mono text-xs font-medium text-steel uppercase tracking-widest">
          Technical Data
        </span>
      </div>
      <dl>
        {rows.map((row, i) => (
          <div
            key={row.label}
            className={[
              'flex items-center justify-between px-5 py-3',
              i !== rows.length - 1 ? 'border-b border-border' : '',
            ].join(' ')}
          >
            <dt className="text-sm text-steel">{row.label}</dt>
            <dd className="font-mono text-sm font-medium text-penstock">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
