// ── PROJECTS ───────────────────────────────────────────────────
const PROJECTS = [
  { id: 'P-001', name: 'Q2 Onboarding', team: 'People Ops', status: 'active' },
  { id: 'P-002', name: 'Office Relocation', team: 'Operations', status: 'active' },
  { id: 'P-003', name: 'Policy Updates', team: 'HR', status: 'active' },
  { id: 'P-004', name: 'Vendor Management', team: 'Operations', status: 'active' },
  { id: 'P-005', name: 'Q1 Wrap-up', team: 'Operations', status: 'completed' },
];

const TEAMS = ['People Ops', 'HR', 'Operations'];

// ── SAMPLE DATA ────────────────────────────────────────────────
const TASKS = [
  {
    id: 'T-001', title: 'Finalize Q2 onboarding schedule',
    desc: 'Coordinate with hiring managers to lock in dates for the 12 new hires starting in May.',
    status: 'in-progress', priority: 'high', owner: 'Jordan Miller',
    due: '2026-04-16', type: 'task', source: '',
    project: 'P-001', team: 'People Ops',
    comments: [
      { author: 'Priya Shah', text: 'Hiring managers confirmed 8 of 12 start dates. Waiting on Austin and Buffalo.', time: '2026-04-13T10:30:00' },
      { author: 'Jordan Miller', text: 'Following up with Austin today — should have confirmation by EOD.', time: '2026-04-14T09:15:00' }
    ],
    attachments: [
      { name: 'Q2 Onboarding Schedule Draft.xlsx', size: '42 KB', time: '2026-04-12T14:00:00' }
    ],
    activity: [
      { action: 'Task created', time: '2026-04-10T08:00:00' },
      { action: 'Status changed to In Progress', time: '2026-04-11T09:00:00' },
      { action: 'File uploaded: Q2 Onboarding Schedule Draft.xlsx', time: '2026-04-12T14:00:00' }
    ]
  },
  {
    id: 'T-002', title: 'Review equipment request — Austin office',
    desc: 'Approve or reject the bulk laptop order for the Austin expansion team.',
    status: 'pending', priority: 'medium', owner: 'Priya Shah',
    due: '2026-04-18', type: 'request', source: 'Slack',
    project: 'P-002', team: 'Operations',
    comments: [
      { author: 'Carlos Reyes', text: 'Austin team needs 15 laptops, specs attached.', time: '2026-04-12T11:00:00' }
    ],
    attachments: [
      { name: 'Austin Equipment List.pdf', size: '128 KB', time: '2026-04-12T11:00:00' }
    ],
    activity: [
      { action: 'Task created', time: '2026-04-12T10:00:00' }
    ]
  },
  {
    id: 'T-003', title: 'Send benefits enrollment reminder',
    desc: 'Draft and send a company-wide reminder that open enrollment closes April 22.',
    status: 'pending', priority: 'urgent', owner: 'Jordan Miller',
    due: '2026-04-15', type: 'task', source: '',
    project: 'P-001', team: 'People Ops',
    comments: [], attachments: [],
    activity: [{ action: 'Task created', time: '2026-04-09T08:00:00' }]
  },
  {
    id: 'T-004', title: 'Update remote work policy document',
    desc: 'Incorporate the new hybrid attendance guidelines approved by leadership.',
    status: 'in-progress', priority: 'medium', owner: 'Aisha Okafor',
    due: '2026-04-22', type: 'task', source: '',
    project: 'P-003', team: 'HR',
    comments: [
      { author: 'Aisha Okafor', text: 'First draft shared with HR leads for review.', time: '2026-04-14T16:00:00' }
    ],
    attachments: [
      { name: 'Remote Work Policy v2 Draft.docx', size: '56 KB', time: '2026-04-14T16:00:00' }
    ],
    activity: [
      { action: 'Task created', time: '2026-04-08T09:00:00' },
      { action: 'Status changed to In Progress', time: '2026-04-10T10:00:00' }
    ]
  },
  {
    id: 'T-005', title: 'Schedule team building event — May',
    desc: 'Book venue, send invites, and organize logistics for the cross-team offsite.',
    status: 'pending', priority: 'low', owner: 'Carlos Reyes',
    due: '2026-04-25', type: 'task', source: '',
    project: 'P-001', team: 'People Ops',
    comments: [], attachments: [],
    activity: [{ action: 'Task created', time: '2026-04-10T08:00:00' }]
  },
  {
    id: 'T-006', title: 'Process contractor invoices — March',
    desc: 'Review and approve 6 outstanding contractor invoices from March.',
    status: 'completed', priority: 'high', owner: 'Priya Shah',
    due: '2026-04-10', type: 'task', source: '',
    project: 'P-004', team: 'Operations',
    comments: [
      { author: 'Priya Shah', text: 'All 6 invoices approved and submitted to finance.', time: '2026-04-10T15:00:00' }
    ],
    attachments: [],
    activity: [
      { action: 'Task created', time: '2026-04-03T08:00:00' },
      { action: 'Status changed to In Progress', time: '2026-04-07T09:00:00' },
      { action: 'Status changed to Completed', time: '2026-04-10T15:00:00' }
    ]
  },
  {
    id: 'T-007', title: 'IT access setup for new hires',
    desc: 'Submit access provisioning requests for 5 new hires starting April 21.',
    status: 'pending', priority: 'high', owner: 'Carlos Reyes',
    due: '2026-04-19', type: 'request', source: 'Email',
    project: 'P-001', team: 'People Ops',
    comments: [], attachments: [],
    activity: [{ action: 'Task created', time: '2026-04-11T08:00:00' }]
  },
  {
    id: 'T-008', title: 'Complete Q1 ops retrospective',
    desc: 'Gather feedback from each team lead and compile into a summary deck.',
    status: 'completed', priority: 'medium', owner: 'Jordan Miller',
    due: '2026-04-08', type: 'task', source: '',
    project: 'P-005', team: 'Operations',
    comments: [],
    attachments: [
      { name: 'Q1 Retrospective Summary.pdf', size: '320 KB', time: '2026-04-08T14:00:00' }
    ],
    activity: [
      { action: 'Task created', time: '2026-04-01T08:00:00' },
      { action: 'Status changed to Completed', time: '2026-04-08T14:00:00' }
    ]
  },
  {
    id: 'T-009', title: 'Coordinate office move — 3rd floor',
    desc: 'Work with facilities to plan desk assignments and move timeline for the 3rd floor renovation.',
    status: 'in-progress', priority: 'high', owner: 'Aisha Okafor',
    due: '2026-04-28', type: 'task', source: '',
    project: 'P-002', team: 'Operations',
    comments: [
      { author: 'Aisha Okafor', text: 'Facilities confirmed move window: April 26–28. Need to finalize seating chart.', time: '2026-04-13T14:00:00' }
    ],
    attachments: [
      { name: '3rd Floor Layout Plan.pdf', size: '1.2 MB', time: '2026-04-13T14:00:00' }
    ],
    activity: [
      { action: 'Task created', time: '2026-04-05T08:00:00' },
      { action: 'Status changed to In Progress', time: '2026-04-09T10:00:00' }
    ]
  },
  {
    id: 'T-010', title: 'Respond to employee travel request',
    desc: 'Review and approve conference travel request from engineering team.',
    status: 'pending', priority: 'medium', owner: 'Jordan Miller',
    due: '2026-04-17', type: 'request', source: 'Form',
    project: '', team: 'HR',
    comments: [], attachments: [],
    activity: [{ action: 'Task created', time: '2026-04-14T08:00:00' }]
  },
  {
    id: 'T-011', title: 'Vendor contract renewal — catering',
    desc: 'Review renewal terms from current catering vendor, negotiate pricing.',
    status: 'pending', priority: 'low', owner: 'Priya Shah',
    due: '2026-04-30', type: 'task', source: '',
    project: 'P-004', team: 'Operations',
    comments: [], attachments: [],
    activity: [{ action: 'Task created', time: '2026-04-07T08:00:00' }]
  },
  {
    id: 'T-012', title: 'Parking pass allocation for Q2',
    desc: 'Assign parking passes for new team members and handle waitlist.',
    status: 'completed', priority: 'low', owner: 'Carlos Reyes',
    due: '2026-04-05', type: 'request', source: 'Slack',
    project: 'P-002', team: 'Operations',
    comments: [], attachments: [],
    activity: [
      { action: 'Task created', time: '2026-03-28T08:00:00' },
      { action: 'Status changed to Completed', time: '2026-04-05T11:00:00' }
    ]
  }
];

let tasks = JSON.parse(JSON.stringify(TASKS));
let projects = JSON.parse(JSON.stringify(PROJECTS));
let nextId = 13;
let currentDrawerTaskId = null;
let activeProjectFilter = null; // when viewing tasks inside a project

// ── ELEMENTS ───────────────────────────────────────────────────
const $ = id => document.getElementById(id);

const overlay   = $('overlay');
const drawer    = $('drawer');
const searchInput = $('search-input');
const filterStatus   = $('filter-status');
const filterPriority = $('filter-priority');
const filterOwner    = $('filter-owner');
const filterProject  = $('filter-project');
const filterTeam     = $('filter-team');

// ── VIEW SWITCHING ─────────────────────────────────────────────
document.querySelectorAll('.nav-item').forEach(btn => {
  btn.addEventListener('click', () => {
    const view = btn.dataset.view;
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    btn.classList.add('active');

    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    const el = $('view-' + view);
    if (el) el.classList.add('active');

    // Clear project drill-down when switching views
    activeProjectFilter = null;
    $('proj-back').style.display = 'none';

    $('page-title').textContent = btn.textContent.trim().replace(/\d+$/, '').trim();

    // Hide filters on My Work view
    document.querySelector('.filter-bar').style.display = view === 'mywork' ? 'none' : '';

    renderAll();
  });
});

// ── USER PILL → MY WORK ────────────────────────────────────────
document.querySelector('.user-pill').addEventListener('click', () => {
  document.querySelectorAll('.nav-item').forEach(n => {
    n.classList.toggle('active', n.dataset.view === 'mywork');
  });
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  $('view-mywork').classList.add('active');
  activeProjectFilter = null;
  $('proj-back').style.display = 'none';
  $('page-title').textContent = 'My Work';
  document.querySelector('.filter-bar').style.display = 'none';
  renderAll();
});

// ── FILTERS & SEARCH ───────────────────────────────────────────
filterStatus.addEventListener('change', renderAll);
filterPriority.addEventListener('change', renderAll);
filterOwner.addEventListener('change', renderAll);
filterProject.addEventListener('change', renderAll);
filterTeam.addEventListener('change', renderAll);
searchInput.addEventListener('input', renderAll);

$('btn-clear-filters').addEventListener('click', () => {
  filterStatus.value = 'all';
  filterPriority.value = 'all';
  filterOwner.value = 'all';
  filterProject.value = 'all';
  filterTeam.value = 'all';
  activeProjectFilter = null;
  searchInput.value = '';
  renderAll();
});

function getFilteredTasks() {
  const s  = filterStatus.value;
  const p  = filterPriority.value;
  const o  = filterOwner.value;
  const pj = filterProject.value;
  const tm = filterTeam.value;
  const q  = searchInput.value.toLowerCase().trim();

  return tasks.filter(t => {
    if (activeProjectFilter && t.project !== activeProjectFilter) return false;
    if (s !== 'all' && t.status !== s) return false;
    if (p !== 'all' && t.priority !== p) return false;
    if (o !== 'all' && t.owner !== o) return false;
    if (pj !== 'all' && t.project !== pj) return false;
    if (tm !== 'all' && t.team !== tm) return false;
    if (q && !t.title.toLowerCase().includes(q) && !t.desc.toLowerCase().includes(q)) return false;
    return true;
  });
}

function getProjectName(id) {
  const p = projects.find(pr => pr.id === id);
  return p ? p.name : '';
}

// ── RENDER ALL VIEWS ───────────────────────────────────────────
function renderAll() {
  renderBoard();
  renderList();
  renderTimeline();
  renderRequests();
  renderProjects();
  renderMyWork();
}

// ── KANBAN BOARD ───────────────────────────────────────────────
function renderBoard() {
  const filtered = getFilteredTasks();

  ['pending', 'in-progress', 'completed'].forEach(status => {
    const col = $('col-' + status);
    const items = filtered.filter(t => t.status === status);
    $('count-' + status).textContent = items.length;
    col.innerHTML = items.map(t => `
      <div class="k-card" draggable="true" data-id="${t.id}">
        <div class="k-card-tags">
          ${t.project ? `<span class="project-tag">${escHtml(getProjectName(t.project))}</span>` : ''}
          ${t.team ? `<span class="team-tag team-${slugify(t.team)}">${escHtml(t.team)}</span>` : ''}
        </div>
        <div class="k-card-title">${escHtml(t.title)}</div>
        <div class="k-card-meta">
          <span class="priority-tag priority-${t.priority}">${t.priority}</span>
          ${t.owner ? `<span class="owner-tag">${escHtml(t.owner.split(' ')[0])}</span>` : ''}
          ${t.due ? `<span class="due-tag ${isOverdue(t) ? 'overdue' : ''}">${formatDate(t.due)}</span>` : ''}
        </div>
      </div>
    `).join('');

    // Click handlers
    col.querySelectorAll('.k-card').forEach(card => {
      card.addEventListener('click', () => openDrawer(card.dataset.id));
    });

    // Drag handlers
    col.querySelectorAll('.k-card').forEach(card => {
      card.addEventListener('dragstart', e => {
        e.dataTransfer.setData('text/plain', card.dataset.id);
        card.classList.add('dragging');
      });
      card.addEventListener('dragend', () => card.classList.remove('dragging'));
    });
  });

  // Drop zones
  document.querySelectorAll('.kanban-cards').forEach(zone => {
    zone.addEventListener('dragover', e => {
      e.preventDefault();
      zone.classList.add('drag-over');
    });
    zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
    zone.addEventListener('drop', e => {
      e.preventDefault();
      zone.classList.remove('drag-over');
      const id = e.dataTransfer.getData('text/plain');
      const newStatus = zone.closest('.kanban-col').dataset.status;
      const task = tasks.find(t => t.id === id);
      if (task && task.status !== newStatus) {
        task.activity = task.activity || [];
        task.activity.push({ action: `Status changed to ${statusLabel(newStatus)}`, time: new Date().toISOString() });
        task.status = newStatus;
        renderAll();
      }
    });
  });
}

// ── LIST VIEW ──────────────────────────────────────────────────
function renderList() {
  const filtered = getFilteredTasks();
  const list = $('task-list');
  list.innerHTML = filtered.map(t => `
    <div class="list-row" data-id="${t.id}">
      <div class="lr-title">
        <div class="lr-title-text">${escHtml(t.title)}</div>
        <div class="lr-title-tags">
          ${t.project ? `<span class="project-tag">${escHtml(getProjectName(t.project))}</span>` : ''}
          ${t.team ? `<span class="team-tag team-${slugify(t.team)}">${escHtml(t.team)}</span>` : ''}
        </div>
      </div>
      <div class="lr-cell"><span class="priority-tag priority-${t.priority}" style="font-size:10px">${t.priority}</span></div>
      <div class="lr-cell">${escHtml(t.owner || '—')}</div>
      <div class="lr-cell ${isOverdue(t) ? 'overdue' : ''}" style="${isOverdue(t) ? 'color:var(--red);font-weight:500' : ''}">${t.due ? formatDate(t.due) : '—'}</div>
      <div class="lr-cell"><span class="status-chip status-${t.status}">${statusLabel(t.status)}</span></div>
    </div>
  `).join('');

  list.querySelectorAll('.list-row').forEach(row => {
    row.addEventListener('click', () => openDrawer(row.dataset.id));
  });
}

// ── TIMELINE VIEW ──────────────────────────────────────────────
let tlMode = 'week'; // 'week' | 'month'
let tlWeekOffset = 0; // 0 = current week
let tlMonthOffset = 0; // 0 = current month

function getMonday(date) {
  const d = new Date(date); d.setHours(0,0,0,0);
  const day = d.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  d.setDate(d.getDate() + diff);
  return d;
}

function isSameDay(a, b) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function toDateKey(d) {
  return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
}

// Mode tab switching
document.querySelectorAll('.tl-mode-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    tlMode = tab.dataset.tlMode;
    document.querySelectorAll('.tl-mode-tab').forEach(t => t.classList.toggle('active', t === tab));
    $('tl-week-view').style.display = tlMode === 'week' ? '' : 'none';
    $('tl-month-view').style.display = tlMode === 'month' ? '' : 'none';
    renderTimeline();
  });
});

$('tl-prev').addEventListener('click', () => { if (tlMode === 'week') tlWeekOffset--; else tlMonthOffset--; renderTimeline(); });
$('tl-next').addEventListener('click', () => { if (tlMode === 'week') tlWeekOffset++; else tlMonthOffset++; renderTimeline(); });
$('tl-today-btn').addEventListener('click', () => { tlWeekOffset = 0; tlMonthOffset = 0; renderTimeline(); });

function renderTimeline() {
  if (tlMode === 'week') renderWeekView();
  else renderMonthView();
}

function renderWeekView() {
  const filtered = getFilteredTasks().filter(t => t.due);
  const today = new Date(); today.setHours(0,0,0,0);

  // Compute the Monday of the target week
  const monday = getMonday(today);
  monday.setDate(monday.getDate() + tlWeekOffset * 7);
  const sunday = new Date(monday); sunday.setDate(sunday.getDate() + 6);

  // Nav label
  const mo = monday.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  const su = sunday.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  $('tl-nav-label').textContent = `${mo} – ${su}`;

  // Build day columns
  const days = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(monday); d.setDate(d.getDate() + i);
    days.push(d);
  }

  // Map due dates
  const tasksByDay = {};
  days.forEach(d => { tasksByDay[toDateKey(d)] = []; });
  filtered.forEach(t => {
    const key = t.due;
    if (tasksByDay[key]) tasksByDay[key].push(t);
  });

  // Overdue tasks (due before this week's Monday, not completed)
  const overdue = filtered.filter(t => {
    if (t.status === 'completed') return false;
    const d = new Date(t.due + 'T00:00:00'); d.setHours(0,0,0,0);
    return d < monday;
  });

  // Render overdue strip
  const overdueEl = $('tl-week-overdue');
  if (overdue.length > 0) {
    overdueEl.style.display = '';
    overdueEl.innerHTML = `
      <div class="tl-overdue-label">Overdue <span class="tl-overdue-count">${overdue.length}</span></div>
      <div class="tl-overdue-tasks">
        ${overdue.map(t => `
          <div class="wk-task wk-task-overdue" data-id="${t.id}">
            <span class="priority-tag priority-${t.priority}">${t.priority}</span>
            <span class="wk-task-title">${escHtml(t.title)}</span>
            <span class="wk-task-due">${formatDate(t.due)}</span>
          </div>
        `).join('')}
      </div>
    `;
    overdueEl.querySelectorAll('.wk-task').forEach(el => {
      el.addEventListener('click', () => openDrawer(el.dataset.id));
    });
  } else {
    overdueEl.style.display = 'none';
    overdueEl.innerHTML = '';
  }

  // Render week grid
  const grid = $('tl-week-grid');
  grid.innerHTML = days.map((d, i) => {
    const key = toDateKey(d);
    const isToday = isSameDay(d, today);
    const isPast = d < today && !isToday;
    const dayLabel = d.toLocaleDateString('en-US', { weekday: 'short' });
    const dateLabel = d.getDate();
    const monthLabel = d.toLocaleDateString('en-US', { month: 'short' });
    const showMonth = i === 0 || d.getDate() === 1;

    const dayTasks = tasksByDay[key] || [];
    // Show in-progress tasks only on today if their due date is later in the week
    const spanning = isToday ? filtered.filter(t => {
      if (t.status !== 'in-progress') return false;
      const due = new Date(t.due + 'T00:00:00'); due.setHours(0,0,0,0);
      return due > d && !dayTasks.includes(t);
    }) : [];

    return `
      <div class="wk-day ${isToday ? 'wk-day-today' : ''} ${isPast ? 'wk-day-past' : ''}">
        <div class="wk-day-header">
          <span class="wk-day-name">${dayLabel}</span>
          <span class="wk-day-date">${showMonth ? monthLabel + ' ' : ''}${dateLabel}</span>
          ${dayTasks.length > 0 ? `<span class="wk-day-count">${dayTasks.length}</span>` : ''}
        </div>
        <div class="wk-day-tasks">
          ${dayTasks.map(t => `
            <div class="wk-task ${t.status === 'completed' ? 'wk-task-done' : ''}" data-id="${t.id}">
              <div class="wk-task-pri priority-dot priority-dot-${t.priority}"></div>
              <div class="wk-task-body">
                <div class="wk-task-title">${escHtml(t.title)}</div>
                <div class="wk-task-tags">
                  ${t.project ? `<span class="project-tag">${escHtml(getProjectName(t.project))}</span>` : ''}
                  ${t.owner ? `<span class="wk-task-owner">${escHtml(t.owner.split(' ')[0])}</span>` : ''}
                </div>
              </div>
              <span class="status-chip status-${t.status}" style="font-size:10px">${statusLabel(t.status)}</span>
            </div>
          `).join('')}
          ${spanning.map(t => `
            <div class="wk-task wk-task-span" data-id="${t.id}">
              <div class="wk-task-pri priority-dot priority-dot-${t.priority}"></div>
              <div class="wk-task-body">
                <div class="wk-task-title">${escHtml(t.title)}</div>
                <div class="wk-task-tags"><span class="wk-span-label">ongoing · due ${formatDate(t.due)}</span></div>
              </div>
            </div>
          `).join('')}
          ${dayTasks.length === 0 && spanning.length === 0 ? '<div class="wk-empty"></div>' : ''}
        </div>
      </div>
    `;
  }).join('');

  grid.querySelectorAll('.wk-task').forEach(el => {
    el.addEventListener('click', () => openDrawer(el.dataset.id));
  });
}

function renderMonthView() {
  const filtered = getFilteredTasks().filter(t => t.due);
  const today = new Date(); today.setHours(0,0,0,0);

  const target = new Date(today.getFullYear(), today.getMonth() + tlMonthOffset, 1);
  const year = target.getFullYear();
  const month = target.getMonth();

  $('tl-nav-label').textContent = target.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  // Days in month
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  // What day does the 1st fall on? (0=Sun)
  const firstDow = new Date(year, month, 1).getDay();
  // Shift so Monday=0
  const startPad = firstDow === 0 ? 6 : firstDow - 1;

  // Count tasks per day
  const taskCounts = {};
  let maxCount = 0;
  filtered.forEach(t => {
    const d = new Date(t.due + 'T00:00:00');
    if (d.getFullYear() === year && d.getMonth() === month) {
      const day = d.getDate();
      taskCounts[day] = (taskCounts[day] || 0) + 1;
      if (taskCounts[day] > maxCount) maxCount = taskCounts[day];
    }
  });

  // Count overdue per day
  const overdueCounts = {};
  filtered.forEach(t => {
    if (t.status === 'completed') return;
    const d = new Date(t.due + 'T00:00:00'); d.setHours(0,0,0,0);
    if (d.getFullYear() === year && d.getMonth() === month && d < today) {
      const day = d.getDate();
      overdueCounts[day] = (overdueCounts[day] || 0) + 1;
    }
  });

  const grid = $('tl-month-grid');
  let html = '<div class="mo-header-row">';
  ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].forEach(d => {
    html += `<div class="mo-header-cell">${d}</div>`;
  });
  html += '</div><div class="mo-body">';

  // Pad start
  for (let i = 0; i < startPad; i++) html += '<div class="mo-cell mo-cell-empty"></div>';

  for (let day = 1; day <= daysInMonth; day++) {
    const d = new Date(year, month, day);
    const isToday = isSameDay(d, today);
    const count = taskCounts[day] || 0;
    const overdueCount = overdueCounts[day] || 0;
    const intensity = maxCount > 0 ? Math.min(Math.ceil((count / maxCount) * 3), 3) : 0;

    html += `
      <div class="mo-cell ${isToday ? 'mo-cell-today' : ''} ${overdueCount > 0 ? 'mo-cell-overdue' : ''}">
        <div class="mo-cell-day">${day}</div>
        ${count > 0 ? `
          <div class="mo-cell-bar mo-bar-${intensity}"></div>
          <div class="mo-cell-count">${count} task${count !== 1 ? 's' : ''}</div>
        ` : ''}
      </div>
    `;
  }

  // Pad end
  const totalCells = startPad + daysInMonth;
  const remainder = totalCells % 7;
  if (remainder > 0) {
    for (let i = 0; i < 7 - remainder; i++) html += '<div class="mo-cell mo-cell-empty"></div>';
  }

  html += '</div>';
  grid.innerHTML = html;
}

// ── REQUESTS VIEW ──────────────────────────────────────────────
function renderRequests() {
  const requests = tasks.filter(t => t.type === 'request');
  const open = requests.filter(t => t.status !== 'completed');
  $('req-count').textContent = open.length + ' open';

  const navBadge = $('nav-req-badge');
  if (navBadge) navBadge.textContent = open.length;

  const list = $('request-list');
  list.innerHTML = requests.map(t => `
    <div class="req-card" data-id="${t.id}">
      <div class="req-dot ${t.status === 'completed' ? 'accepted' : ''}"></div>
      <div class="req-body">
        <div class="req-body-title">${escHtml(t.title)}</div>
        <div class="req-body-meta">
          <span><span class="priority-tag priority-${t.priority}" style="font-size:10px">${t.priority}</span></span>
          ${t.project ? `<span class="project-tag">${escHtml(getProjectName(t.project))}</span>` : ''}
          ${t.team ? `<span class="team-tag team-${slugify(t.team)}">${escHtml(t.team)}</span>` : ''}
          ${t.source ? `<span>via ${escHtml(t.source)}</span>` : ''}
          ${t.owner ? `<span>${escHtml(t.owner)}</span>` : ''}
          ${t.due ? `<span>Due ${formatDate(t.due)}</span>` : ''}
          <span class="status-chip status-${t.status}" style="font-size:10px">${statusLabel(t.status)}</span>
        </div>
      </div>
      <div class="req-actions">
        ${t.status !== 'completed' ? `
          <button class="req-accept" data-id="${t.id}" title="Accept">Accept</button>
          <button class="req-dismiss" data-id="${t.id}" title="Dismiss">Dismiss</button>
        ` : ''}
      </div>
    </div>
  `).join('');

  list.querySelectorAll('.req-card').forEach(card => {
    card.addEventListener('click', e => {
      if (e.target.closest('.req-accept') || e.target.closest('.req-dismiss')) return;
      openDrawer(card.dataset.id);
    });
  });

  list.querySelectorAll('.req-accept').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const task = tasks.find(t => t.id === btn.dataset.id);
      if (task) {
        task.activity = task.activity || [];
        task.activity.push({ action: 'Status changed to In Progress', time: new Date().toISOString() });
        task.status = 'in-progress';
        renderAll();
      }
    });
  });

  list.querySelectorAll('.req-dismiss').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const task = tasks.find(t => t.id === btn.dataset.id);
      if (task) {
        task.activity = task.activity || [];
        task.activity.push({ action: 'Status changed to Completed', time: new Date().toISOString() });
        task.status = 'completed';
        renderAll();
      }
    });
  });
}

// ── DRAWER ─────────────────────────────────────────────────────
function openDrawer(taskId) {
  const task = taskId ? tasks.find(t => t.id === taskId) : null;
  currentDrawerTaskId = task ? task.id : null;

  const isNew = !task;
  $('drawer-id').textContent = task ? task.id : 'New Task';
  $('drawer-title').value = task ? task.title : '';
  $('drawer-status').value = task ? task.status : 'pending';
  $('drawer-priority').value = task ? task.priority : 'medium';
  $('drawer-owner').value = task ? task.owner : '';
  $('drawer-due').value = task ? task.due : '';
  $('drawer-type').value = task ? task.type : 'task';
  $('drawer-source').value = task ? (task.source || '') : '';
  $('drawer-project').value = task ? (task.project || '') : (activeProjectFilter || '');
  $('drawer-team').value = task ? (task.team || '') : '';
  $('drawer-desc').value = task ? task.desc : '';

  $('btn-delete-task').style.display = isNew ? 'none' : 'inline-flex';

  // Show/hide interactive sections based on new vs existing task
  $('drawer-attachments-section').style.display = isNew ? 'none' : '';
  $('drawer-comments-section').style.display = isNew ? 'none' : '';
  $('drawer-activity-section').style.display = isNew ? 'none' : '';

  if (task) {
    renderDrawerAttachments(task);
    renderDrawerComments(task);
    renderDrawerActivity(task);
  }

  overlay.style.display = 'block';
  drawer.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function renderDrawerAttachments(task) {
  const container = $('drawer-attachments');
  if (!task.attachments || task.attachments.length === 0) {
    container.innerHTML = '<div class="dwr-empty">No attachments yet</div>';
    return;
  }
  container.innerHTML = task.attachments.map((a, i) => `
    <div class="dwr-attachment-item">
      <div class="att-icon">📎</div>
      <div class="att-info">
        <div class="att-name">${escHtml(a.name)}</div>
        <div class="att-meta">${escHtml(a.size)} · ${formatDateTime(a.time)}</div>
      </div>
      <button class="att-remove" data-index="${i}" title="Remove">×</button>
    </div>
  `).join('');

  container.querySelectorAll('.att-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.index);
      const removed = task.attachments.splice(idx, 1)[0];
      task.activity.push({ action: `File removed: ${removed.name}`, time: new Date().toISOString() });
      renderDrawerAttachments(task);
      renderDrawerActivity(task);
    });
  });
}

function renderDrawerComments(task) {
  const container = $('drawer-comments');
  if (!task.comments || task.comments.length === 0) {
    container.innerHTML = '<div class="dwr-empty">No comments yet</div>';
    return;
  }
  container.innerHTML = task.comments.map(c => `
    <div class="dwr-comment">
      <div class="comment-header">
        <span class="comment-author">${escHtml(c.author)}</span>
        <span class="comment-time">${formatDateTime(c.time)}</span>
      </div>
      <div class="comment-text">${escHtml(c.text)}</div>
    </div>
  `).join('');
  container.scrollTop = container.scrollHeight;
}

function renderDrawerActivity(task) {
  const container = $('drawer-activity');
  if (!task.activity || task.activity.length === 0) {
    container.innerHTML = '<div class="dwr-empty">No activity yet</div>';
    return;
  }
  container.innerHTML = [...task.activity].reverse().map(a => `
    <div class="dwr-activity-item">
      <div class="activity-dot"></div>
      <div class="activity-text">${escHtml(a.action)}</div>
      <div class="activity-time">${formatDateTime(a.time)}</div>
    </div>
  `).join('');
}

function closeDrawer() {
  overlay.style.display = 'none';
  drawer.classList.remove('open');
  document.body.style.overflow = '';
  currentDrawerTaskId = null;
}

overlay.addEventListener('click', closeDrawer);
$('btn-close-drawer').addEventListener('click', closeDrawer);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });

// ── SAVE TASK ──────────────────────────────────────────────────
$('btn-save-task').addEventListener('click', () => {
  const title = $('drawer-title').value.trim();
  if (!title) { $('drawer-title').focus(); return; }

  const now = new Date().toISOString();

  if (currentDrawerTaskId) {
    const task = tasks.find(t => t.id === currentDrawerTaskId);
    if (task) {
      // Track changes as activity
      const newStatus = $('drawer-status').value;
      const newPriority = $('drawer-priority').value;
      const newOwner = $('drawer-owner').value;
      const newDue = $('drawer-due').value;

      if (task.status !== newStatus)
        task.activity.push({ action: `Status changed to ${statusLabel(newStatus)}`, time: now });
      if (task.priority !== newPriority)
        task.activity.push({ action: `Priority changed to ${newPriority}`, time: now });
      if (task.owner !== newOwner)
        task.activity.push({ action: `Owner changed to ${newOwner || 'Unassigned'}`, time: now });
      if (task.due !== newDue)
        task.activity.push({ action: `Due date changed to ${newDue ? formatDate(newDue) : 'none'}`, time: now });

      task.title    = title;
      task.status   = newStatus;
      task.priority = newPriority;
      task.owner    = newOwner;
      task.due      = newDue;
      task.type     = $('drawer-type').value;
      task.source   = $('drawer-source').value;
      task.project  = $('drawer-project').value;
      task.team     = $('drawer-team').value;
      task.desc     = $('drawer-desc').value;
    }
  } else {
    tasks.push({
      id: 'T-' + String(nextId++).padStart(3, '0'),
      title,
      desc:     $('drawer-desc').value,
      status:   $('drawer-status').value,
      priority: $('drawer-priority').value,
      owner:    $('drawer-owner').value,
      due:      $('drawer-due').value,
      type:     $('drawer-type').value,
      source:   $('drawer-source').value,
      project:  $('drawer-project').value,
      team:     $('drawer-team').value,
      comments: [],
      attachments: [],
      activity: [{ action: 'Task created', time: now }],
    });
  }

  closeDrawer();
  renderAll();
});

// ── DELETE TASK ────────────────────────────────────────────────
$('btn-delete-task').addEventListener('click', () => {
  if (currentDrawerTaskId) {
    tasks = tasks.filter(t => t.id !== currentDrawerTaskId);
    closeDrawer();
    renderAll();
  }
});

// ── NEW TASK BUTTON ────────────────────────────────────────────
$('btn-new-task').addEventListener('click', () => openDrawer(null));

// ── HELPERS ────────────────────────────────────────────────────
function escHtml(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
}

function isOverdue(task) {
  if (!task.due || task.status === 'completed') return false;
  const today = new Date(); today.setHours(0,0,0,0);
  const due = new Date(task.due + 'T00:00:00'); due.setHours(0,0,0,0);
  return due < today;
}

function statusLabel(s) {
  switch (s) {
    case 'pending':     return 'Pending';
    case 'in-progress': return 'In Progress';
    case 'completed':   return 'Completed';
    default: return s;
  }
}

function getEndOfWeek(date) {
  const d = new Date(date);
  const day = d.getDay();
  const diff = day === 0 ? 0 : 7 - day;
  d.setDate(d.getDate() + diff);
  return d;
}

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function formatDateTime(isoStr) {
  if (!isoStr) return '';
  const d = new Date(isoStr);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) + ' ' +
         d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
}

function formatFileSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return Math.round(bytes / 1024) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

// ── COMMENT HANDLER ────────────────────────────────────────────
function addComment() {
  const input = $('comment-input');
  const text = input.value.trim();
  if (!text || !currentDrawerTaskId) return;

  const task = tasks.find(t => t.id === currentDrawerTaskId);
  if (!task) return;

  task.comments = task.comments || [];
  task.activity = task.activity || [];

  const now = new Date().toISOString();
  task.comments.push({ author: 'Jordan Miller', text, time: now });
  task.activity.push({ action: 'Comment added', time: now });

  input.value = '';
  renderDrawerComments(task);
  renderDrawerActivity(task);
}

$('btn-add-comment').addEventListener('click', addComment);
$('comment-input').addEventListener('keydown', e => {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); addComment(); }
});

// ── FILE UPLOAD HANDLER ────────────────────────────────────────
$('file-input').addEventListener('change', e => {
  if (!currentDrawerTaskId) return;
  const task = tasks.find(t => t.id === currentDrawerTaskId);
  if (!task) return;

  task.attachments = task.attachments || [];
  task.activity = task.activity || [];

  const now = new Date().toISOString();
  const files = Array.from(e.target.files);

  files.forEach(f => {
    task.attachments.push({
      name: f.name,
      size: formatFileSize(f.size),
      time: now
    });
    task.activity.push({ action: `File uploaded: ${f.name}`, time: now });
  });

  e.target.value = '';
  renderDrawerAttachments(task);
  renderDrawerActivity(task);
});

// ── REQUEST ACCEPT/DISMISS ACTIVITY ─────────────────────────────
// (Patched into existing accept/dismiss via renderRequests)

// ── PROJECTS VIEW ──────────────────────────────────────────────
function renderProjects() {
  const list = $('projects-list');
  if (!list) return;

  list.innerHTML = projects.map(p => {
    const pTasks = tasks.filter(t => t.project === p.id);
    const done = pTasks.filter(t => t.status === 'completed').length;
    const total = pTasks.length;
    const isActive = p.status === 'active';
    const isViewing = activeProjectFilter === p.id;

    return `
      <div class="proj-card ${isViewing ? 'proj-active' : ''}" data-project="${p.id}">
        <div class="proj-card-top">
          <div class="proj-card-name">${escHtml(p.name)}</div>
          <span class="team-tag team-${slugify(p.team)}">${escHtml(p.team)}</span>
        </div>
        <div class="proj-card-info">
          <span class="proj-task-count">${total} task${total !== 1 ? 's' : ''}</span>
          <span class="proj-task-sep">·</span>
          <span>${done} completed</span>
          <span class="proj-status proj-status-${p.status}">${isActive ? 'Active' : 'Completed'}</span>
        </div>
        ${total > 0 ? `<div class="proj-progress"><div class="proj-progress-fill" style="width:${total ? Math.round(done/total*100) : 0}%"></div></div>` : ''}
      </div>
    `;
  }).join('');

  list.querySelectorAll('.proj-card').forEach(card => {
    card.addEventListener('click', () => {
      const pid = card.dataset.project;
      if (activeProjectFilter === pid) {
        activeProjectFilter = null;
        $('proj-back').style.display = 'none';
      } else {
        activeProjectFilter = pid;
        $('proj-back').style.display = 'inline-flex';
        // Switch to board view to show filtered tasks
        document.querySelectorAll('.nav-item').forEach(n => {
          n.classList.toggle('active', n.dataset.view === 'board');
        });
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        $('view-board').classList.add('active');
        const proj = projects.find(pr => pr.id === pid);
        $('page-title').textContent = proj ? proj.name : 'Board';
      }
      renderAll();
    });
  });
}

// ── MY WORK VIEW ───────────────────────────────────────────────
function renderMyWork() {
  const CURRENT_USER = 'Jordan Miller';
  const today = new Date(); today.setHours(0,0,0,0);
  const endOfWeek = getEndOfWeek(today);

  const myTasks = tasks.filter(t => t.owner === CURRENT_USER);
  const openTasks = myTasks.filter(t => t.status !== 'completed');

  const overdue = [];
  const dueToday = [];
  const upcoming = [];

  openTasks.forEach(t => {
    if (!t.due) { upcoming.push(t); return; }
    const d = new Date(t.due + 'T00:00:00'); d.setHours(0,0,0,0);
    if (d < today) overdue.push(t);
    else if (d.getTime() === today.getTime()) dueToday.push(t);
    else upcoming.push(t);
  });

  // Stats
  $('mw-stats').innerHTML = `
    <div class="mw-stat">
      <div class="mw-stat-num">${openTasks.length}</div>
      <div class="mw-stat-label">Open tasks</div>
    </div>
    <div class="mw-stat mw-stat-red">
      <div class="mw-stat-num">${overdue.length}</div>
      <div class="mw-stat-label">Overdue</div>
    </div>
    <div class="mw-stat mw-stat-amber">
      <div class="mw-stat-num">${dueToday.length}</div>
      <div class="mw-stat-label">Due today</div>
    </div>
    <div class="mw-stat mw-stat-green">
      <div class="mw-stat-num">${myTasks.filter(t => t.status === 'completed').length}</div>
      <div class="mw-stat-label">Completed</div>
    </div>
  `;

  function renderTaskGroup(containerId, title, items, emptyMsg) {
    const el = $(containerId);
    if (items.length === 0) {
      el.innerHTML = '';
      return;
    }
    el.innerHTML = `
      <div class="mw-section-header">${title} <span class="mw-section-count">${items.length}</span></div>
      ${items.map(t => `
        <div class="mw-task" data-id="${t.id}">
          <div class="mw-task-main">
            <span class="priority-tag priority-${t.priority}">${t.priority}</span>
            <span class="mw-task-title">${escHtml(t.title)}</span>
          </div>
          <div class="mw-task-meta">
            ${t.project ? `<span class="project-tag">${escHtml(getProjectName(t.project))}</span>` : ''}
            ${t.due ? `<span class="mw-task-due ${isOverdue(t) ? 'overdue' : ''}">${formatDate(t.due)}</span>` : ''}
            <span class="status-chip status-${t.status}">${statusLabel(t.status)}</span>
          </div>
        </div>
      `).join('')}
    `;
    el.querySelectorAll('.mw-task').forEach(card => {
      card.addEventListener('click', () => openDrawer(card.dataset.id));
    });
  }

  renderTaskGroup('mw-overdue', 'Overdue', overdue);
  renderTaskGroup('mw-today', 'Due Today', dueToday);
  renderTaskGroup('mw-upcoming', 'Upcoming', upcoming);

  // My Projects
  const myProjectIds = [...new Set(myTasks.map(t => t.project).filter(Boolean))];
  const myProjects = projects.filter(p => myProjectIds.includes(p.id));
  const mwProjects = $('mw-projects');
  if (myProjects.length) {
    mwProjects.innerHTML = `
      <div class="mw-section-header">Your Projects</div>
      <div class="mw-projects-grid">
        ${myProjects.map(p => {
          const pTasks = tasks.filter(t => t.project === p.id);
          const done = pTasks.filter(t => t.status === 'completed').length;
          const total = pTasks.length;
          return `
            <div class="mw-project-card" data-project="${p.id}">
              <div class="mw-proj-name">${escHtml(p.name)}</div>
              <div class="mw-proj-meta">${done}/${total} tasks done</div>
              ${total > 0 ? `<div class="proj-progress"><div class="proj-progress-fill" style="width:${Math.round(done/total*100)}%"></div></div>` : ''}
            </div>
          `;
        }).join('')}
      </div>
    `;
    mwProjects.querySelectorAll('.mw-project-card').forEach(card => {
      card.addEventListener('click', () => {
        const pid = card.dataset.project;
        activeProjectFilter = pid;
        $('proj-back').style.display = 'inline-flex';
        document.querySelectorAll('.nav-item').forEach(n => {
          n.classList.toggle('active', n.dataset.view === 'board');
        });
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        $('view-board').classList.add('active');
        const proj = projects.find(pr => pr.id === pid);
        $('page-title').textContent = proj ? proj.name : 'Board';
        renderAll();
      });
    });
  } else {
    mwProjects.innerHTML = '';
  }

  // Pending requests assigned to me
  const myRequests = tasks.filter(t => t.type === 'request' && t.owner === CURRENT_USER && t.status !== 'completed');
  const mwReqs = $('mw-requests');
  if (myRequests.length) {
    mwReqs.innerHTML = `
      <div class="mw-section-header">Needs Your Response <span class="mw-section-count">${myRequests.length}</span></div>
      ${myRequests.map(t => `
        <div class="mw-task" data-id="${t.id}">
          <div class="mw-task-main">
            <span class="priority-tag priority-${t.priority}">${t.priority}</span>
            <span class="mw-task-title">${escHtml(t.title)}</span>
          </div>
          <div class="mw-task-meta">
            ${t.source ? `<span class="mw-task-source">via ${escHtml(t.source)}</span>` : ''}
            ${t.due ? `<span class="mw-task-due">${formatDate(t.due)}</span>` : ''}
          </div>
        </div>
      `).join('')}
    `;
    mwReqs.querySelectorAll('.mw-task').forEach(card => {
      card.addEventListener('click', () => openDrawer(card.dataset.id));
    });
  } else {
    mwReqs.innerHTML = '';
  }

  // Recent activity from my tasks
  const allActivity = [];
  myTasks.forEach(t => {
    (t.activity || []).forEach(a => {
      allActivity.push({ taskId: t.id, taskTitle: t.title, action: a.action, time: a.time });
    });
  });
  allActivity.sort((a, b) => b.time.localeCompare(a.time));
  const recentActivity = allActivity.slice(0, 8);

  const mwActivity = $('mw-activity');
  if (recentActivity.length) {
    mwActivity.innerHTML = `
      <div class="mw-section-header">Recent Activity</div>
      ${recentActivity.map(a => `
        <div class="mw-activity-item" data-id="${a.taskId}">
          <div class="activity-dot"></div>
          <div class="mw-activity-body">
            <span class="mw-activity-action">${escHtml(a.action)}</span>
            <span class="mw-activity-task">${escHtml(a.taskTitle)}</span>
          </div>
          <div class="mw-activity-time">${formatDateTime(a.time)}</div>
        </div>
      `).join('')}
    `;
    mwActivity.querySelectorAll('.mw-activity-item').forEach(el => {
      el.addEventListener('click', () => openDrawer(el.dataset.id));
    });
  } else {
    mwActivity.innerHTML = '';
  }
}

// ── PROJECT BACK BUTTON ────────────────────────────────────────
$('proj-back').addEventListener('click', () => {
  activeProjectFilter = null;
  $('proj-back').style.display = 'none';
  // Restore board title
  const activeNav = document.querySelector('.nav-item.active');
  if (activeNav) $('page-title').textContent = activeNav.textContent.trim().replace(/\d+$/, '').trim();
  renderAll();
});

// ── INIT ───────────────────────────────────────────────────────
renderAll();
